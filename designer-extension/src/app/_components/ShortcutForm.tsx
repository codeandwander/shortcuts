"use client";

import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import CodeSnippet from "@/app/_components/CodeSnippet";
import dynamic from "next/dynamic";
import ShortcutPreview from "./ShortcutPreview";
import { getModifiedConfigValues, copyToClipboard } from "../_utils/utils";
import { IconCode, IconCopy, IconSettings } from "@tabler/icons-react";
import { useRouter } from 'next/navigation';

export type Shortcut = {
  id: string;
  name: string;
  preview: boolean;
  includeAllValues: boolean;
  fields: Array<{
    id: string;
    name: string;
    type: string;
    defaultValue: any;
    options?: Array<{
      id: string;
      name: string;
    }>;
    fields?: Array<{
      id: string;
      name: string;
      type: string;
      defaultValue: any;
    }>;
  }>;
  libraryCSS: string;
  libraryJS: string;
  javascript: string;
  html: string;
};

const fieldComponents: Record<string, any> = {
  select: dynamic(() => import('@/app/_components/fields/Select')),
  checkbox: dynamic(() => import('@/app/_components/fields/Checkbox')),
  number: dynamic(() => import('@/app/_components/fields/Number')),
  object: dynamic(() => import('@/app/_components/fields/Object')),
  text: dynamic(() => import('@/app/_components/fields/Text')),
  group: dynamic(() => import('@/app/_components/fields/Group')),
};

export default function ShortcutForm({ shortcut: initialShortcut }: { shortcut: Shortcut; shortcutId: string }) {
  const [shortcut, setShortcut] = useState<Shortcut>(initialShortcut);
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const router = useRouter();

  useEffect(() => {
    const initialValues: Record<string, any> = {};
    shortcut.fields.forEach((field) => {
      switch (field.type) {
        case 'select':
          initialValues[field.id] = field.options && field.options.length > 0 ? field.options[0].id : '';
          break;
        case 'checkbox':
          initialValues[field.id] = field.defaultValue || false;
          break;
        case 'number':
          initialValues[field.id] = field.defaultValue || 0;
          break;
        case 'object':
          initialValues[field.id] = field.defaultValue || {};
          break;
        case 'group':
          initialValues[field.id] = {};
          field.fields?.forEach((subField) => {
            initialValues[field.id][subField.id] = subField.defaultValue;
          });
          break;
        default:
          initialValues[field.id] = field.defaultValue || '';
      }
    });
    setFormValues(initialValues);
  }, [shortcut.fields]);

  const resetFormValues = () => {
    const initialValues: Record<string, any> = {};
    shortcut.fields.forEach((field) => {
      switch (field.type) {
        case 'select':
          initialValues[field.id] = field.options && field.options.length > 0 ? field.options[0].id : '';
          break;
        case 'checkbox':
          initialValues[field.id] = field.defaultValue || false;
          break;
        case 'number':
          initialValues[field.id] = field.defaultValue || 0;
          break;
        case 'object':
          initialValues[field.id] = field.defaultValue || {};
          break;
        case 'group':
          initialValues[field.id] = {};
          field.fields?.forEach((subField) => {
            initialValues[field.id][subField.id] = subField.defaultValue;
          });
          break;
        default:
          initialValues[field.id] = field.defaultValue || '';
      }
    });
    setFormValues(initialValues);
  };

  const handleChange = (fieldId: string, value: any) => {
    setFormValues((prev) => {
      const newValues = { ...prev };
      if (fieldId.includes('.')) {
        const [groupId, subFieldId] = fieldId.split('.');
        newValues[groupId] = { ...newValues[groupId], [subFieldId]: value };
      } else {
        newValues[fieldId] = value;
      }
      return newValues;
    });
  };

  const handleCopyToClipboard = useCallback(() => {
    const codeToClipboard = shortcut.javascript.replace(
      `__DYNAMIC_CONFIG__`,
      JSON.stringify(getModifiedConfigValues(shortcut, formValues), null, 2)
    );

    copyToClipboard(codeToClipboard)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  }, [shortcut.javascript, formValues, shortcut.includeAllValues]);

  const renderField = (field: any) => {
    const FieldComponent = fieldComponents[field.type];
    if (!FieldComponent) return null;

    const commonProps = {
      id: field.id,
      name: field.name,
      value: formValues[field.id] || '',
      onChange: (value: any) => handleChange(field.id, value),
    };

    const specificProps: Record<string, any> = {
      select: { options: field.options || [] },
      checkbox: { defaultValue: formValues[field.id] || false },
      group: { fields: field.fields || [], formValues, handleChange },
      text: { defaultValue: formValues[field.id] || field.defaultValue },
      number: { defaultValue: formValues[field.id] || field.defaultValue },
      object: { defaultValue: formValues[field.id] || field.defaultValue },
    };

    return (
      <FieldComponent key={`shortcut-field-${field.id}`} {...commonProps} {...specificProps[field.type]} />
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex gap-2 h-full">
            <div className="bg-[--colors-background-2] rounded-md h-full overflow-y-auto min-w-[300px]">
              <div className="flex items-center justify-between p-2 border-b border-[--colors-border-1]">
                <div className="flex items-center gap-1">
                  <IconSettings size={20} stroke={1} />
                  <span className="leading-none text-[--colors-text-primary] font-bold text-sm">Configure</span>
                </div>

                <button
                    className="px-2 py-1 text-xs bg-[--colors-action-primary-background] text-[--colors-action-primary-text] rounded hover:bg-[--colors-action-primary-background-hover]"
                    onClick={resetFormValues}
                  >
                  Reset
                </button>
              </div>
              <div className="p-2">
                <form className="flex flex-col gap-2">
                  {shortcut.fields.map(renderField)}
                </form>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 h-full">
              <div className="flex-1 bg-[--colors-background-2] rounded-md">
                <div className="flex items-center justify-between p-2 border-b border-[--colors-border-1]">
                <div className="flex items-center gap-1">
                  <IconCode size={20} stroke={1} />
                  <span className="leading-none text-[--colors-text-primary] font-bold text-sm">Code</span>
                </div>

                  <button
                    onClick={handleCopyToClipboard}
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-[--colors-action-primary-background] text-[--colors-action-primary-text] rounded hover:bg-[--colors-action-primary-background-hover]"
                  >
                    <IconCopy size={12} stroke={1.5} />
                    {isCopied ? "Copied!" : "Copy to Clipboard"}
                  </button>
                </div>
                <div className="p-2 relative h-[calc(100%-41px)]">
                  <CodeSnippet code={shortcut.javascript.replace(`__DYNAMIC_CONFIG__`, JSON.stringify(getModifiedConfigValues(shortcut, formValues), null, 6))} />
                </div>
              </div>

              {shortcut.preview && (
                <div className="flex-1 bg-[--colors-background-2] rounded-md">
                <div className="flex items-center justify-between p-2 border-b border-[--colors-border-1]">
                  <span className="leading-none text-[--colors-text-primary] font-bold text-sm">Preview</span>

                  <button
                    className="px-2 py-1 text-xs bg-[--colors-action-primary-background] text-[--colors-action-primary-text] rounded hover:bg-[--colors-action-primary-background-hover]"
                    onClick={() => setRefreshKey(prevKey => prevKey + 1)}
                  >
                    Refresh
                  </button>
                </div>
                <div className="p-2 relative h-[calc(100%-41px)]">
                  <ShortcutPreview shortcut={shortcut} formValues={formValues} refreshKey={refreshKey} />
                </div>
              </div>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex gap-2 h-full">
            <div className="bg-[--colors-background-2] rounded-md h-full overflow-y-auto min-w-[300px]">

            </div>
            <div className="flex-1 flex flex-col gap-2 h-full">
              <div className="flex-1 bg-[--colors-background-2] rounded-md">
                <div className="flex items-center justify-between p-2 border-b border-[--colors-border-1]">
                <div className="flex items-center gap-1">
                  <IconCode size={20} stroke={1} />
                  <span className="leading-none text-[--colors-text-primary] font-bold text-sm">Component</span>
                </div>

                  <button
                    onClick={handleCopyToClipboard}
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-[--colors-action-primary-background] text-[--colors-action-primary-text] rounded hover:bg-[--colors-action-primary-background-hover]"
                  >
                    <IconCopy size={12} stroke={1.5} />
                    {isCopied ? "Inserted!" : "Insert"}
                  </button>
                </div>
                <div className="p-2 relative h-[calc(100%-41px)]">
                  
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-[--colors-background-2] rounded-md h-full overflow-y-auto">
            <h2 className="text-[--colors-text-primary] font-bold text-lg p-4">Final Information</h2>
            {/* Add final information content */}
          </div>
        );
      default:
        return null;
    }
  };

  const handleFinish = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col h-screen bg-[--colors-background-1]">
      <div className="flex items-center justify-between p-2 h-10 border-b border-[--colors-border-1]">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-[--colors-text-secondary] text-[11.5px]">
            ‹ Shortcuts
          </Link>
          <span className="text-[--colors-text-secondary] text-[11.5px] capitalize border-l border-[--colors-border-1] pl-2">
            {shortcut.name}
          </span>
        </div>
        <a href="https://google.com" rel="noopener noreferrer" className="text-[--wf-system---green-100] text-[11.5px]">
          Watch tutorial ↗
        </a>
      </div>

      <div className="p-2 flex-1 flex flex-col">
        {renderStepContent()}
      </div>

      <div className="flex items-center justify-between p-2 h-10 border-t border-[--colors-border-1] bg-[--colors-background-1]">
        <span className="text-[--colors-text-secondary] text-[11.5px]">
          Step {currentStep}/{totalSteps}
        </span>
        <div>
          {currentStep > 1 && (
            <button
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="px-2 py-1 text-xs bg-[--colors-action-secondary-background] text-[--colors-action-secondary-text] rounded hover:bg-[--colors-action-secondary-background-hover] mr-2"
            >
              Previous
            </button>
          )}
          {currentStep < totalSteps ? (
            <button
              onClick={() => setCurrentStep(prev => prev + 1)}
              className="px-2 py-1 text-xs bg-[--colors-action-primary-background] text-[--colors-action-primary-text] rounded hover:bg-[--colors-action-primary-background-hover]"
            >
              Next Step ›
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="px-2 py-1 text-xs bg-[--colors-action-primary-background] text-[--colors-action-primary-text] rounded hover:bg-[--colors-action-primary-background-hover]"
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}