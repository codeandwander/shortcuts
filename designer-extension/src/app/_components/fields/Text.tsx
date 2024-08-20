import React from 'react';

const TextField = ({ id, name, defaultValue, handleChange }: { id: string, name: string, type: string, defaultValue: any, value?: any, handleChange: (id: string, value: any) => void }) => (
  <div className="w-full flex items-center justify-between">
    <label htmlFor={id} className="text-[--colors-text-secondary] text-[11.5px] w-3/5">{name}</label>
    <input
      id={id}
      type="text"
      name={name}
      defaultValue={defaultValue}
      onChange={(e) => handleChange(id, e.target.value)}
      className="w-2/5 bg-[--colors-background-1] rounded-md text-sm p-1 border border-[--colors-border-1]"
      />
  </div>
);

export default TextField;