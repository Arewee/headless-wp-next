import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { fetchPostBySlug } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';

export default function SinglePost() {
      const router = useRouter();
      const { slug } = router.query;
      const [post, setPost] = useState(null);

      useEffect(() => {
            if (slug) {
                  async function fetchPost() {
                        const fetchedPost = await fetchPostBySlug(slug);
                        setPost(fetchedPost);
                  }
                  fetchPost();
            }
      }, [slug])

      if (!post || !post.title) {
            return (
                  <Layout>
                        <p>Loading post..</p>
                  </Layout>
            );
      }

            return (
            <Layout>

                  <div className="single-post flex flex-col justify-between items-center min-h-[50vh]">
                        {post._embedded?.['wp:featuredmedia'] && (
                              <div className="post-thumbnail-wrapper-single relative w-full max-w-[400px] aspect-[4/3] mx-auto">
                        <Image
                        className="post-thumbnail"
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={post.title.rendered}
                        // width={800}
                        // height={200}
                        fill
                        style={{ objectFit: 'cover' }}
                        />
                        </div>
                        )}
                        


                        <h1>{post.title.rendered}</h1>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

                        <div className="section-back-to-blog bg-neutral-900 px-4 py-2 rounded-xl">
                              <Link href="/blog" className='btn-back-to-blog'>
                              Tillbaka
                              
                              </Link>
                        </div>
                  </div>
            </Layout>
      );

}