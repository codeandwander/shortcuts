"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import IconGDPR from "../_icons/gdpr";
import IconMarquee from "../_icons/marquee";
import IconCMS from "../_icons/cms";
import IconSlider from "../_icons/slider";
import IconChart from "../_icons/chart";
import IconMasonry from "../_icons/masonry";
import IconMatter from "../_icons/matter";
import IconWebgl from "../_icons/webgl";
import IconUTM from "../_icons/utm";

export const initialShortcuts = [
  { name: "Google Consent Mode", icon: IconGDPR, enabled: true, slug: "google-consent-mode" },
  { name: "Swiper JS", icon: IconSlider, enabled: true, slug: "swiper-js" },
  { name: "ChartJS", icon: IconChart, enabled: true, slug: "chart-js" },
  { name: "Marquee CSS", icon: IconMarquee, enabled: false, slug: "marquee-css" },
  { name: "CMS Inject", icon: IconCMS, enabled: false, slug: "cms-inject" },
  { name: "Masonry", icon: IconMasonry, enabled: false, slug: "masonry" },
  { name: "MatterJS", icon: IconMatter, enabled: false, slug: "matter-js" },
  { name: "WebGL Image Transition", icon: IconWebgl, enabled: false, slug: "webgl-image-transition" },
  { name: "Preserve UTM Button", icon: IconUTM, enabled: false, slug: "preserve-utm-button" },
];

function ShortcutItem({ shortcut }: any) {
  const content = (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="w-12 h-12">
        <shortcut.icon />
      </div>
      <span className="text-[--colors-text-1] text-[11.5px] text-center">
        {shortcut.name}
      </span>
      {!shortcut.enabled && (
        <div className="absolute bottom-2 left-0 w-full flex items-center justify-center">
          <span className="text-[--wf-system---gray-500] text-[10px] text-center bg-[--colors-background-1] rounded-full px-2 py-0.5">Coming soon</span>
        </div>
      )}
    </div>
  );

  const commonClasses = `relative flex items-center justify-center bg-[--colors-background-2] p-2 h-40 ${
    shortcut.enabled ? '' : 'opacity-50'
  } transition-colors duration-200`;

  if (shortcut.enabled) {
    return (
      <Link 
        href={`/shortcuts/${shortcut.slug}`}
        className={`${commonClasses} hover:bg-[--colors-background-3]`}
      >
        {content}
      </Link>
    );
  } else {
    return (
      <div className={commonClasses}>
        {content}
      </div>
    );
  }
}

export default function ShortcutGrid() {
  const [shortcuts, setShortcuts] = useState(initialShortcuts);
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchTerm = searchParams.get('search')?.toLowerCase() || '';
    const filtered = initialShortcuts.filter((shortcut: any) =>
      shortcut.name.toLowerCase().includes(searchTerm)
    );
    setShortcuts(filtered);
  }, [searchParams]);

  return (
    <div className="grid grid-cols-4 gap-2 p-2">
      {shortcuts?.map((shortcut: any, index: any) => (
        <ShortcutItem key={index} shortcut={shortcut} />
      ))}
    </div>
  );
}