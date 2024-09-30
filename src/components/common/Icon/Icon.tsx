import type { ComponentType, MouseEventHandler, ReactNode } from "react";
import Logo from "@/public/assets/icons/logo.svg";
import Filter from "@/public/assets/icons/filter.svg";
import User from "@/public/assets/icons/user.svg";
import { cn } from "@/src/libs/utils/general";

export interface IconWrapperProps {
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

const IconWrapper =
  <P extends object>(WrappedComponent: ComponentType<P>) =>
  ({ className, ...rest }: IconWrapperProps) => {
    return (
      <i className={cn("block", className)}>
        <WrappedComponent {...(rest as P)} />
      </i>
    );
  };

export const IconLogo = IconWrapper(Logo);
export const IconFilter = IconWrapper(Filter);
export const IconUser = IconWrapper(User);
