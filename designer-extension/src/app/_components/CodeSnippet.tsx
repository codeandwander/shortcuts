"use client"

import React from "react"
import { Editor } from "@monaco-editor/react"

interface CodeSnippetProps {
  code: string
}

export default function CodeSnippet({ code }: CodeSnippetProps) {
  return (
    <Editor 
      height="100%" 
      defaultLanguage="html" 
      value={code}
      theme="vs-dark"
      options={{
        fontSize: 12,
        fontFamily: "'Fira Code', monospace",
        minimap: { enabled: false },
        wordWrap: "on",
        readOnly: true
      }}
    />
  )
}