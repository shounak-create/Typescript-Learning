// app/products/[id]/page.tsx
import { notFound } from 'next/navigation';

const validIds = ['1', '2', '3'];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!validIds.includes(id)) {
    notFound();
  }

  return <h1>Product ID: {id}</h1>;
}