import { FunctionComponent } from 'react';
import { IBase } from '~types';

export const Container: FunctionComponent<IBase> = ({ children, className }) => {
  return(
    <section className={`container ${className || ''}`}>
      {children}
    </section>
  )
}