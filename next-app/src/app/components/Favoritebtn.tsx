'use client';

import { useState } from 'react';

export default function FavoriteButton({ productName }: { productName: string }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button onClick={() => setIsFavorite(!isFavorite)}>
      {isFavorite ? '❤️' : '🤍'} {productName}
    </button>
  );
}