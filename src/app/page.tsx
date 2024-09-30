import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/common/Breadcrumb/Breadcrumb";
import ProductCard from "@/src/components/shared/ProductCard/ProductCard";

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 2,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 3,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 4,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 5,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 6,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 7,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 8,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 9,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 10,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 11,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 12,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 13,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 14,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
  {
    id: 15,
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10,
  },
];

export default function Home() {
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
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard
            key={product.name}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}
