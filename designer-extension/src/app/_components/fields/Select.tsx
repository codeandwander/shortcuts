import React from 'react';

const SelectField = ({ id, name, defaultValue, options, onChange }: { id: string, name: string, defaultValue: string, options: { id: string, name: string }[], onChange: (value: string) => void }) => (
  <div className="flex items-center justify-between">
    <label htmlFor={id} className="text-[--colors-text-secondary] text-[11.5px] w-3/5">{name}</label>
    <select
      id={id}
      defaultValue={defaultValue}
      onChange={(e) => onChange(e.target.value)}
      className="w-2/5 bg-[--colors-background-1] rounded-md text-sm p-1 border border-[--colors-border-1]"
    >
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;