import useGetMockData from "@/src/hooks/useGetMockData";
import { cn } from "@/src/libs/utils/general";
import { ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

const CategoryMenu = () => {
  const { categories, handleFilter } = useGetMockData();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const selectedSubCategories = useMemo(() => {
    return categories.find((category) => category.id === selectedCategory)?.subcategories;
  }, [selectedCategory, categories]);

  const handleMouseEnter = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="relative w-[444px] h-[352px] bg-background-300 shadow-lg rounded-[32px] p-4 flex">
      <div className="border-r border-gray mr-1.5 pr-1.5">
        {categories.map((category) => (
          <div
            key={category.name}
            className={cn(
              "w-[200px] rounded-full p-2 flex justify-between items-center hover:bg-background-400 cursor-pointer",
              selectedCategory === category.id && "bg-background-400",
            )}
            onClick={() => handleFilter({ categoryId: category.id, subcategoryId: "" })}
            onMouseEnter={() => handleMouseEnter(category.id)}
          >
            <p>{category.name}</p>
            <ChevronRight />
          </div>
        ))}
      </div>
      <div>
        {selectedSubCategories?.map((category) => (
          <div
            key={category.name}
            className={cn(
              "w-[200px] rounded-full p-2 flex justify-between items-center hover:bg-background-400 cursor-pointer",
              selectedCategory === category.id && "bg-background-400",
            )}
            onClick={() => handleFilter({ categoryId: selectedCategory, subcategoryId: category.id })}
          >
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
