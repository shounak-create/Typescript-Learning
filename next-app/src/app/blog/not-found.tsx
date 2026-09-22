import { notFound } from 'next/navigation';

const validIds = ['1', '2', '3'];

export default function ProductPage({ params }: { params: { id: string } }) {
  if (!validIds.includes(params.id)) {
    notFound();
  }
  return <h1>Product ID: {params.id}</h1>;
}