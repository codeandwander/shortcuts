"use client";

import React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function SearchBox() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="col-span-full row-span-1 flex items-stretch bg-[--colors-ui-input-background] border border-[--colors-border-2] rounded p-0.5 px-2 h-6 relative">
        <input
          type="text"
          name="search"
          autoComplete="off"
          aria-disabled="false"
          placeholder="Search shortcuts..."
          className="w-full bg-transparent outline-none text-[11.5px] placeholder-[--wf-system---gray-700]"
          defaultValue={searchParams.get('search')?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </form>
  );
}