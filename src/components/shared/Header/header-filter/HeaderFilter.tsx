"use client";

import { CommonDropdownMenu } from "@/src/components/common/DropdownMenu/DropdownMenu";
import { IconFilter } from "@/src/components/common/Icon/Icon";
import { Input } from "@/src/components/common/Input/Input";
import { cn } from "@/src/libs/utils/general";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const HeaderFilter = () => {
  const [showCenterLine, setShowCenterLine] = useState(true);

  return (
    <div className="flex items-center">
      <div className="bg-background-200 w-max rounded-full flex items-center">
        <div className="w-[264px]">
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

        <div className="w-[264px]">
          <CommonDropdownMenu
            trigger={
              <Input
                placeholder="All"
                label="Category"
                onFocus={() => {
                  setShowCenterLine(false);
                }}
                onBlur={() => {
                  setShowCenterLine(true);
                }}
                icon={<Search />}
                onIconClick={() => {
                  console.log("search");
                }}
              />
            }
          >
            <div className="bg-danger w-20 h-20">zxc</div>
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
