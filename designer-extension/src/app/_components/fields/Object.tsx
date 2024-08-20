import React from 'react';

const ObjectField = ({ id, name, defaultValue, onChange }: { id: string, name: string, defaultValue: object, onChange: (value: object) => void }) => (
  <div className="w-full flex items-center justify-between">
    <label htmlFor={id} className="text-[--colors-text-secondary] text-[11.5px] w-3/5">{name}</label>
    <textarea
      id={id}
      defaultValue={JSON.stringify(defaultValue, null, 2)}
      className="w-2/5 bg-[--colors-background-1] rounded-md text-sm p-1 border border-[--colors-border-1]"
      onChange={(e) => {
        try {
          const parsedValue = JSON.parse(e.target.value);
          onChange(parsedValue);
        } catch (error) {
          console.error('Invalid JSON:', error);
        }
      }}
    />
  </div>
);

export default ObjectField;