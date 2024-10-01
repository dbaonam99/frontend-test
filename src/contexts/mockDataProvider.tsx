"use client";

import type React from "react";
import { createContext, useState } from "react";

type Product = {
  id: number;
  name: string;
  creator: string;
  rating: number;
  price: number;
  categoryId: string;
  subcategoryId: string;
};

type Category = {
  id: string;
  name: string;
  subcategories: Subcategory[];
};

type Subcategory = {
  id: string;
  name: string;
};

type MockDataContextType = {
  defaultProducts: Product[];
  products: Product[];
  categories: Category[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const MOCK_CATEGORIES = [
  {
    id: "1",
    name: "Avatars",
    subcategories: [
      {
        id: "1.1",
        name: "Human-like",
      },
      {
        id: "1.2",
        name: "Anthro & Furry",
      },
      {
        id: "1.3",
        name: "Robot & Cyborgs",
      },
      {
        id: "1.4",
        name: "Others",
      },
      {
        id: "1.5",
        name: "All in Avatars",
      },
    ],
  },
  {
    id: "2",
    name: "Fashion",
    subcategories: [
      {
        id: "2.1",
        name: "Clothes",
      },
      {
        id: "2.2",
        name: "Accessories",
      },
      {
        id: "2.3",
        name: "Others",
      },
      {
        id: "2.4",
        name: "All in Fashion",
      },
    ],
  },
  {
    id: "3",
    name: "All",
    subcategories: [],
  },
];

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Avatars - Human-like",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "1",
    subcategoryId: "1.1",
  },
  {
    id: 2,
    name: "Avatars - Anthro & Furry",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "1",
    subcategoryId: "1.2",
  },
  {
    id: 3,
    name: "Avatars - Robot & Cyborgs",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "1",
    subcategoryId: "1.3",
  },
  {
    id: 4,
    name: "Avatars - Others",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "1",
    subcategoryId: "1.4",
  },
  {
    id: 5,
    name: "Avatars - All in Avatars",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "1",
    subcategoryId: "1.5",
  },
  {
    id: 6,
    name: "Fashion - Clothes",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "2",
    subcategoryId: "2.1",
  },
  {
    id: 7,
    name: "Fashion - Accessories",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "2",
    subcategoryId: "2.2",
  },
  {
    id: 8,
    name: "Fashion - Others 2",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "2",
    subcategoryId: "2.3",
  },
  {
    id: 9,
    name: "Fashion - All in Fashion",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "2",
    subcategoryId: "2.4",
  },
  {
    id: 10,
    name: "Avatars - Human-like 3",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "1",
    subcategoryId: "1.1",
  },
  {
    id: 11,
    name: "Avatars - Human-like 2",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "1",
    subcategoryId: "1.1",
  },
  {
    id: 12,
    name: "Avatars - Anthro & Furry 2",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "1",
    subcategoryId: "1.2",
  },
  {
    id: 13,
    name: "Avatars - Robot & Cyborgs 2",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "1",
    subcategoryId: "1.3",
  },
  {
    id: 14,
    name: "Avatars - Others 2",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "1",
    subcategoryId: "1.4",
  },
  {
    id: 15,
    name: "Avatars - All in Avatars 2",
    creator: "Creator name",
    rating: 5,
    price: 10,
    categoryId: "1",
    subcategoryId: "1.5",
  },
];

export const MockDataContext = createContext<MockDataContextType>({
  defaultProducts: [],
  products: [],
  categories: [],
  setProducts: () => {},
  selectedCategory: "",
  setSelectedCategory: () => {},
});

const MockDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const value: MockDataContextType = {
    defaultProducts: MOCK_PRODUCTS,
    products,
    categories: MOCK_CATEGORIES,
    setProducts,
    selectedCategory,
    setSelectedCategory,
  };

  return <MockDataContext.Provider value={value}>{children}</MockDataContext.Provider>;
};

export default MockDataProvider;
