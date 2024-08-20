import React from "react";

import shortcuts from "../../../../data/shortcuts";
import ShortcutForm from "@/app/_components/ShortcutForm";

export default function Page({ params }: { params: { shortcut: string } }) {
  const shortcut = shortcuts.find((shortcut) => shortcut.id === params.shortcut)

  if (!shortcut) {
    return <div>Shortcut not found</div>
  }

  return (
    <ShortcutForm 
      shortcut={shortcut} 
      shortcutId={params.shortcut} />
  )
}