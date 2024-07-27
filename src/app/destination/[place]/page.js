// src/app/destination/[place]/page.js
"use client";

import { useParams } from 'next/navigation';

export default function PlacePage() {
  const params = useParams();
  const { place } = params;

  return (
    <div className="font-bold text-primary">
      <h1>Kota : {place}</h1>
    </div>
  );
}
