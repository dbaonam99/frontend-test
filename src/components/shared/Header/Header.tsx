"use client";

import { IconLogo, IconUser } from "@/src/components/common/Icon/Icon";
import HeaderFilter from "@/src/components/shared/Header/header-filter/HeaderFilter";
import { Globe, Menu, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="h-20 flex">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <IconLogo />

        <HeaderFilter />

        <div className="flex items-center gap-6">
          <p className="text-white text-sm">List your creation</p>
          <Globe className="w-5 h-5" />
          <div className="h-12 flex items-center gap-4 border border-white rounded-full p-2">
            <Menu className="w-5 h-5" />

            <IconUser />
          </div>
          <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center">
            <ShoppingCart className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
