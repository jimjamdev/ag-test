import { FunctionComponent } from 'react';
import { IBase } from '~types/base';

export interface IInput extends IBase {
  name: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  onChange?: any;
  defaultValue?: string;
  required?: boolean;
}

export const Input: FunctionComponent<IInput> = ({
  id,
  name,
  onChange,
  className,
  placeholder,
  defaultValue,
  type = 'text',
  required = true,
}) => {
  return (
    <input
      name={name}
      id={id || name}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
      required={required}
      type={type}
      className={`input ${className || ''}`}
    />
  );
};
