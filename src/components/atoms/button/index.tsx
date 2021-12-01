import { FunctionComponent } from 'react';

export interface IButton {
  id?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FunctionComponent<IButton> = ({
  id,
  children,
  className,
  onClick,
  type,
}) => {
  return (
    <button
      id={id}
      type={type}
      className={`btn ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
