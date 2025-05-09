import Link from 'next/link';
import { getProducts } from '../lib/woocommerce';

export async function getStaticProps() {
      const products = await getProducts();
      return {
            props: { products },
            revalidate: 60,
      };
}

export default function Shop({ products }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Produkter</h1>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product.id} className="border rounded p-4">

            <Link href={`/shop/${product.slug}`}>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

            <div
              className="text-sm text-green-700 mb-2"
              dangerouslySetInnerHTML={{ __html: product.price_html }}
            />
            
            </Link>


            

            {product.images?.[0]?.src && (
              <img
                src={product.images[0].src}
                alt={product.name}
                className="w-full h-auto rounded"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}