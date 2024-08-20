"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    webflow: any;
  }
}

export default function WebflowConfig() {
  useEffect(() => {
    const webflow = window.webflow;

    if (webflow) {
      webflow.setExtensionSize("large");
    }
  }, []);
  
  return null
}