import { FunctionComponent } from 'react';
import { IForm } from '~types';

export const Form: FunctionComponent<IForm> = ({
  children,
  className,
  onSubmit,
}) => {

  return (
    <form className={`form ${className || ''}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
