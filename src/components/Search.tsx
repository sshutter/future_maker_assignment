"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { LinearProgress } from "@mui/material";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Suspense } from "react";

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (search: string) => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("query", search);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0 w-full text-black pb-4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="w-full h-18 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
};

export default function SearchSection({
  placeholder,
}: {
  placeholder: string;
}) {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Search placeholder={placeholder} />
    </Suspense>
  );
}
