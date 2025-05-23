import React from "react";
import Skeleton from "./skeleton";

export default function Loading() {
  return (
    <div className=" animate-pulse flex flex-col items-center gap-y-4 pt-28">
      <Skeleton className="h-4 w-[550px]" />
      <Skeleton className="h-4 w-[400px]" />
      <Skeleton className="h-4 w-[550px]" />
    </div>
  );
}
