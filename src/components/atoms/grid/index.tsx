import { FunctionComponent } from 'react';
import { IBase } from '~types/base';
import { gridClasses } from './grid-classes';

export interface IGrid extends IBase {
  cols?: number;
  spacing?: number;
  tabletCols?: number;
  tabletSpacing?: number;
  desktopCols?: number;
  desktopSpacing?: number;
  margin?: string;
}

export const Grid: FunctionComponent<IGrid> = ({
  children,
  cols = 1,
  className,
  spacing = 1,
  tabletCols = 4,
  tabletSpacing = 2,
  desktopCols = 4,
  desktopSpacing = 3,
  margin,
}) => {
  const classNames = gridClasses(
    cols,
    tabletCols,
    desktopCols,
    spacing,
    tabletSpacing,
    desktopSpacing,
  );

  return (
    <div className={`${classNames} ${className}`} style={{ margin }}>
      {children}
    </div>
  );
};
