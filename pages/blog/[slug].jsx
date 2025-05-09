import Layout from '@/components/Layout';
import { fetchPostBySlug, fetchPosts } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticPaths() {
  const posts = await fetchPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const post = await fetchPostBySlug(params.slug);

  if (!post || !post.title) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: 60, // ISR om inlägg ändras
  };
}

export default function SinglePost({ post }) {
  return (
    <Layout>
      <div className="single-post flex flex-col justify-between items-center min-h-[50vh]">
        {post._embedded?.['wp:featuredmedia'] && (
          <div className="post-thumbnail-wrapper-single relative w-full max-w-[400px] aspect-[4/3] mx-auto">
            <Image
              className="post-thumbnail"
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}

        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

        <div className="section-back-to-blog bg-neutral-900 px-4 py-2 rounded-xl">
          <Link href="/blog" className="btn-back-to-blog">
            Tillbaka
          </Link>
        </div>
      </div>
    </Layout>
  );
}
