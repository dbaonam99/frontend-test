"use client";

import { CommonDropdownMenu } from "@/src/components/common/DropdownMenu/DropdownMenu";
import { Input } from "@/src/components/common/Input/Input";
import { Search } from "lucide-react";

const CategorySelection = () => {
  return (
    <div className="flex-1">
      <CommonDropdownMenu
        trigger={
          <Input
            placeholder="All"
            label="Category"
            onFocus={() => {
              //   setShowCenterLine(false);
            }}
            onBlur={() => {
              //   setShowCenterLine(true);
            }}
            icon={<Search />}
            onIconClick={() => {
              console.log("search");
            }}
          />
        }
      >
        <div className="p-4 space-y-6 overflow-scroll h-[400px]">zxc</div>
      </CommonDropdownMenu>
    </div>
  );
};

export default CategorySelection;
