// pages/shop/[slug].jsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getProducts } from '../../lib/woocommerce';

export async function getStaticPaths() {
  const products = await getProducts();

  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const products = await getProducts();
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
    revalidate: 60,
  };
}

export default function ProductPage({ product }) {
  const router = useRouter();

  if (router.isFallback) return <p>Laddar produkt...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      {product.images?.[0]?.src && (
        <img
          src={product.images[0].src}
          alt={product.name}
          className="mb-4 rounded"
        />
      )}

      <div
        className="prose mb-4"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />

      <div
        className="text-xl font-semibold text-green-700"
        dangerouslySetInnerHTML={{ __html: product.price_html }}
      />
    <Link href="/shop" className='btn btn-primary p-4'>
      Back to shop!
    </Link>
    </div>
  );
}
