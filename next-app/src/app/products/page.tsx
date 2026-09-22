import Link from 'next/link';

async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    { id: '1', name: 'Keyboard' },
    { id: '2', name: 'Mouse' },
    { id: '3', name: 'Monitor' },
  ];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <Link href={`/products/${p.id}`}>{p.name}</Link>
        </li>
      ))}
    </ul>
  );
}