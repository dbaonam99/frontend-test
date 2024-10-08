"use client";

import { CommonDropdownMenu } from "@/src/components/common/DropdownMenu/DropdownMenu";
import { Input } from "@/src/components/common/Input/Input";
import CategoryMenu from "@/src/components/shared/Header/CategoryMenu";
import useGetMockData from "@/src/hooks/useGetMockData";
import { cn } from "@/src/libs/utils/general";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const HeaderFilter = () => {
  const { selectedCategory } = useGetMockData();
  const [showCenterLine, setShowCenterLine] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="flex items-center">
      <div className="bg-background-200 w-full max-w-xl rounded-full flex items-center">
        <div className="flex-1">
          <Input
            placeholder="Search"
            label="Keyword"
            onFocus={() => {
              setShowCenterLine(false);
            }}
            onBlur={() => {
              setShowCenterLine(true);
            }}
          />
        </div>

        <div className={cn("w-[1px] h-8 bg-gray-200", showCenterLine ? "opacity-100" : "opacity-0")} />

        <div className="flex-1">
          <CommonDropdownMenu
            trigger={
              <div>
                <Input
                  label="Category"
                  onFocus={() => {
                    setShowCenterLine(false);
                  }}
                  onBlur={() => {
                    setShowCenterLine(true);
                  }}
                  icon={<Search />}
                  onIconClick={() => {
                    console.log("onSearch");
                  }}
                  value={selectedCategory}
                  className={cn("cursor-pointer", isCategoryOpen && "bg-background-300")}
                />
              </div>
            }
            onOpenChange={(isOpen) => {
              setIsCategoryOpen(!!isOpen);
              setShowCenterLine(!isOpen);
            }}
          >
            <CategoryMenu />
          </CommonDropdownMenu>
        </div>
      </div>
      <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center ml-2 cursor-pointer">
        <SlidersHorizontal />
      </div>
    </div>
  );
};

export default HeaderFilter;
