import React from 'react';

const NumberField = ({ id, name, defaultValue, onChange }: { id: string, name: string, defaultValue: number, onChange: (value: number) => void }) => (
  <div className="flex items-center justify-between">
    <label htmlFor={id} className="text-[--colors-text-secondary] text-[11.5px] w-3/5">{name}</label>
    <input
      type="number"
      id={id}
      defaultValue={defaultValue}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-2/5 bg-[--colors-background-1] rounded-md text-sm p-1 border border-[--colors-border-1]"
    />
  </div>
);

export default NumberField;