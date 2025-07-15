import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("max-w-[1632px] m-auto px-4 lg:px-5 xl:px-5", className)}
    >
      {children}
    </div>
  );
};

export default Container;
