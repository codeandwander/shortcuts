/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';

const CheckboxField = ({ id, name, hideLabel, defaultValue, onChange }: { id: string, name: string, hideLabel: boolean, defaultValue: boolean, onChange: (value: boolean) => void }) => {
  const [isChecked, setIsChecked] = useState(defaultValue);

  useEffect(() => {
    setIsChecked(defaultValue);
  }, [defaultValue]);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex items-center justify-between">
      {!hideLabel && <label htmlFor={id} className="text-[--colors-text-secondary] text-[11.5px] w-3/5">{name}</label>}
      <div 
        className="relative inline-block w-8 h-5 transition-all duration-200 ease-in-out rounded-full cursor-pointer"
        onClick={handleToggle}
      >
        <input
          id={id}
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={() => {}}
        />
        <div className={`absolute inset-0 transition-all duration-200 ease-in-out rounded-full border border-[--colors-border-1] ${isChecked ? 'bg-blue-500' : 'bg-[--colors-background-1]'}`}></div>
        <div className={`absolute left-1 top-1 w-3 h-3 transition-all duration-200 ease-in-out rounded-full bg-white transform ${isChecked ? 'translate-x-3' : 'translate-x-0'}`}></div>
      </div>
    </div>
  );
};

export default CheckboxField;