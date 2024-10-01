"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/common/Breadcrumb/Breadcrumb";
import { Button } from "@/src/components/common/Button/Button";
import ProductCard from "@/src/components/shared/ProductCard/ProductCard";
import useGetMockData from "@/src/hooks/useGetMockData";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { useMemo } from "react";

export default function ProductDetail({ productId }: { productId: string }) {
  const { getProductById, categories } = useGetMockData();

  const productDetail = useMemo(() => getProductById(Number(productId)), [productId, getProductById]);

  const categoryDetail = useMemo(
    () => categories?.find((category) => category.id === productDetail?.categoryId),
    [categories, productDetail],
  );

  return (
    <div className="my-7 space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{productDetail?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-6">
        <div className="gap-x-6 grid grid-cols-2">
          <div className="relative cursor-pointer bg-background-300 aspect-square rounded-xl flex items-center justify-center">
            {productDetail?.name}
          </div>

          <div className="flex flex-col gap-y-6">
            <div className="space-y-4">
              <p className="text-gray">{categoryDetail?.name}</p>
              <p className="text-3xl font-bold">{productDetail?.name}</p>
              <p className="text-gray">Author: {productDetail?.creator}</p>
              <div className="flex items-center gap-4">
                <p className="text-gray">3 reviews</p>
                <div className="flex items-center gap-1">
                  <StarFilledIcon className="w-4 h-4 text-yellow-300" />
                  <StarFilledIcon className="w-4 h-4 text-yellow-300" />
                  <StarFilledIcon className="w-4 h-4 text-yellow-300" />
                  <StarFilledIcon className="w-4 h-4 text-yellow-300" />
                  <StarFilledIcon className="w-4 h-4 text-yellow-300" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-3xl font-bold">${productDetail?.price}</p>
                <p className="text-gray font-sm line-through">$100.00</p>
              </div>

              <p className="text-gray text-sm overflow-hidden line-clamp-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>

            <Button
              variant="secondary"
              className="w-full bg-background-300 text-primary-foreground"
            >
              Add to cart
            </Button>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold mb-6">Related Products</p>
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
              <ProductCard
                key={productDetail?.id}
                {...productDetail}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
