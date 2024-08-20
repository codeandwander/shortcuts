import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Checkbox from './Checkbox';

const fieldComponents: Record<string, any> = {
  select: dynamic(() => import('./Select')),
  checkbox: dynamic(() => import('./Checkbox')),
  number: dynamic(() => import('./Number')),
  text: dynamic(() => import('./Text')),
};

const GroupField = ({ id, name, fields, defaultValue, formValues, handleChange }: { id: string, name: string, fields: any[], defaultValue: boolean, formValues: Record<string, any>, handleChange: (id: string, value: any) => void }) => {
  const [isEnabled, setIsEnabled] = useState(defaultValue);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-[--colors-text-secondary] text-[11.5px]">{name}</label>
        <Checkbox
          id={id}
          name={name}
          hideLabel={true}
          defaultValue={isEnabled}
          onChange={(value) => {
            setIsEnabled(value);
            handleChange(id, value);
          }}
        />
      </div>
      {isEnabled && (
        <div className="pl-4 space-y-2">
          {fields.map((field: any) => {
            const FieldComponent = fieldComponents[field.type];
            if (!FieldComponent) return null;

            return (
              <FieldComponent
                key={field.id}
                id={`${id}.${field.id}`}
                name={field.name}
                defaultValue={field.defaultValue}
                options={field.options}
                onChange={(value: any) => handleChange(`${id}.${field.id}`, value)}
                value={formValues[`${id}.${field.id}`] || field.defaultValue}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GroupField;