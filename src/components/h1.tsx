import cn from "@/lib/utils";
import React from "react";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: H1Props) {
  return (
    <div>
      <h1
        className={cn(
          "text-3xl lg:text-6xl font-bold tracking-tight",
          className
        )}
      >
        {children}
      </h1>
    </div>
  );
}
