"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/common/Breadcrumb/Breadcrumb";
import ProductCard from "@/src/components/shared/ProductCard/ProductCard";
import useGetMockData from "@/src/hooks/useGetMockData";

export default function MarketPlace() {
  const { products } = useGetMockData();

  return (
    <div className="my-7 space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-5 gap-x-6 gap-y-8">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}
