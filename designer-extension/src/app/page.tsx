import React, { Suspense } from 'react';

import ShortcutGrid from './_components/ShortcutGrid';
import SearchBox from './_components/SearchBox';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between p-2 h-10 border-b border-[--colors-border-1] bg-[--colors-background-1]">
        <span className="text-[--colors-text-secondary] text-[11.5px]">Find shortcuts to help you build your next project!</span>
        <SearchBox />
      </div>
      
      <div className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <ShortcutGrid />
        </Suspense>
      </div>

      <div className="flex items-center justify-between p-2 h-10 border-t border-[--colors-border-1] bg-[--colors-background-1]">
        <span className="text-[--colors-text-secondary] text-[11.5px]">For feedback or support, message <a href="mailto:shortcuts@codeandwander.com" className="underline">shortcuts@codeandwander.com</a></span>
      </div>
    </div>
  );
}