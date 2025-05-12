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
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Produkter</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {products.map((product) => (
          <div key={product.id} className="card w-full max-w-xs bg-base-100 shadow-xl">
            {product.images?.[0]?.src && (
              <figure className="aspect-[4/3] w-full overflow-hidden bg-base-200">
                <img
                  src={product.images[0].src}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </figure>
            )}

            <div className="card-body text-center">
              <h2 className="card-title justify-center">{product.name}</h2>

              <div
                className="text-green-700 mt-2"
                dangerouslySetInnerHTML={{ __html: product.price_html }}
              />

              <div className="card-actions justify-center mt-4">
                <Link href={`/shop/${product.slug}`} className="btn btn-primary">
                  Visa produkt
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





// import Link from 'next/link';
// import { getProducts } from '../lib/woocommerce';

// export async function getStaticProps() {
//       const products = await getProducts();
//       return {
//             props: { products },
//             revalidate: 60,
//       };
// }

// export default function Shop({ products }) {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Produkter</h1>

//       <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <li key={product.id} className="border rounded p-4">

//             <Link href={`/shop/${product.slug}`}>
//             <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

//             <div
//               className="text-sm text-green-700 mb-2"
//               dangerouslySetInnerHTML={{ __html: product.price_html }}
//             />
            
//             </Link>


            

//             {product.images?.[0]?.src && (
//               <img
//                 src={product.images[0].src}
//                 alt={product.name}
//                 className="w-full h-auto rounded"
//               />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }