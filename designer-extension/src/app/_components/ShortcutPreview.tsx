import React, { useEffect, useRef } from 'react';

import { Shortcut } from './ShortcutForm';

interface ShortcutPreviewProps {
  shortcut: Shortcut;
  formValues: Record<string, any>;
  refreshKey: number;
}

const ShortcutPreview: React.FC<ShortcutPreviewProps> = ({ shortcut, formValues, refreshKey }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const modifiedJavaScript = shortcut.javascript.replace('__DYNAMIC_CONFIG__', JSON.stringify(formValues, null, 2));
    const htmlContent = `
      <html>
        <head>
          <style>
            body { margin: 0; }
          </style>
          <link rel="stylesheet" href="${shortcut.libraryCSS}">
          </head>
          <body>
          <div id="preview-content">
          ${shortcut.html}
          </div>
          <script src="${shortcut.libraryJS}"></script>
          ${modifiedJavaScript}
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    if (iframeRef.current) {
      iframeRef.current.src = url;
    }

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [shortcut, formValues, refreshKey]);

  return (
    <iframe
      ref={iframeRef}
      title="ShortcutPreview"
      sandbox="allow-scripts"
      className="w-full h-full border-none"
    />
  );
};

export default ShortcutPreview;