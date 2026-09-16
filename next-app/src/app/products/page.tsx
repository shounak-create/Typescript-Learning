// app/products/page.tsx
import FavoriteButton from '../components/Favoritebtn';

async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return [
    { id: '1', name: 'Keyboard' },
    { id: '2', name: 'Mouse' },
    { id: '3', name: 'Monitor' },
  ];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <FavoriteButton productName={p.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}