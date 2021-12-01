import { FunctionComponent } from 'react';
import { IBase } from '~types/base';

export interface ITextArea extends IBase {
  name: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  onChange?: any;
  defaultValue?: string;
  required?: boolean;
}

export const TextArea: FunctionComponent<ITextArea> = ({
  id,
  name,
  onChange,
  className,
  placeholder,
  defaultValue,
  required = true,
}) => {

  return (
    <textarea
      name={name}
      id={id || name}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
      required={required}
      className={`text-area ${className || ''}`}
    />
  );
};
