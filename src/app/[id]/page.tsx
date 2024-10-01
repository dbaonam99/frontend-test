"use client";

import ProductDetail from "@/src/pages/product-detail/ProductDetail";

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProductDetail productId={params.id} />;
}
