import "./_styles/tailwind.css";
import "./_styles/variables.css";
import "./_styles/global.css";

import React from "react";
import WebflowConfig from "./_components/WebflowConfig";

export const metadata = {
  title: "Code & Wander Shortcuts",
  description: "Find shortcuts to help you build your next project!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WebflowConfig />

        {children}
      
        </body>
    </html>
  );
}
