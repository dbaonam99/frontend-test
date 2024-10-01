import { MockDataContext } from "@/src/contexts/mockDataProvider";
import { useContext } from "react";

const useGetMockData = () => {
  const { products, categories, setProducts, defaultProducts, selectedCategory, setSelectedCategory } =
    useContext(MockDataContext);

  const handleFilter = ({ categoryId, subcategoryId }: { categoryId: string | null; subcategoryId: string | null }) => {
    const isAllSelected = categoryId === "3";
    const selectedCategory = categories?.find((category) => category.id === categoryId);
    if (categoryId) {
      const filteredProducts = isAllSelected
        ? defaultProducts
        : defaultProducts.filter((product) => product.categoryId === categoryId);
      setProducts(filteredProducts);
      setSelectedCategory(selectedCategory?.name || "All");
    }

    if (subcategoryId) {
      const filteredProducts = isAllSelected
        ? defaultProducts
        : defaultProducts.filter((product) => product.subcategoryId === subcategoryId);
      setProducts(filteredProducts);
      setSelectedCategory(
        selectedCategory?.subcategories?.find((subCategory) => subCategory.id === subcategoryId)?.name || "All",
      );
    }
  };

  const getProductById = (id: number) => {
    return products?.find((product) => product.id === id);
  };

  return { products, categories, setProducts, handleFilter, selectedCategory, setSelectedCategory, getProductById };
};

export default useGetMockData;
