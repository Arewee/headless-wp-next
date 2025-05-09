import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { fetchPosts } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';



function Blog() {
      const [posts, setPosts] = useState([]);

      useEffect(() => {
            async function fetchAllPosts() {
                  const fetchedPosts = await fetchPosts();
                  setPosts(fetchedPosts);
            }
            fetchAllPosts();
      }, []);

if (posts.length === 0) {
      return (
            <Layout>
                  <p>Loading posts..</p>
            </Layout>
      );
}

  return (
    <Layout>
      <h1>Blog</h1>
      <ul className="blog-list">
            {posts.map((post) => (
                  <li key={post.id} className="blog-post flex justify-between items-center bg-gray-800 mt-4 p-4 rounded-lg"> 

                  <div className="post-text flex justify-between items-center w-[60%]">
                        <Link href={`/blog/${post.slug}`}>
                        {post.title.rendered}
                        </Link>

                        {/* Publiceringsdatum */}
                        <p className="post-date">
                              {new Date(post.date).toLocaleDateString('sv-SE', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                              })}
                        </p>
                  </div>

                              
                        {post._embedded?.['wp:featuredmedia'] && (
                              <div className="post-thumbnail-wrapper relative w-full max-w-[100px] aspect-[4/3] mx-auto">
                              <Image 
                              className="post-thumbnail"
                              src={post._embedded?.['wp:featuredmedia'][0].source_url}
                              alt={post.title.rendered}
                              // width={800}
                              // height={500}
                              fill
                              style={{ objectFit: 'cover' }}
                              
                              />
                              </div>
                        )}
                  </li>
            ))}
      </ul>
    </Layout>
  )
}
export default Blog