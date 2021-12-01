import { FunctionComponent } from 'react';
import { IBase } from '~types';

export const ListItem: FunctionComponent<IBase> = ({ children, className }) => {
  return <div className={`list-item ${className || ''}`}>{children}</div>;
};
