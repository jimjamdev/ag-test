import { FunctionComponent } from 'react';
import { Container } from '~components/atoms/container';
import { DefaultLayoutFooter } from '~components/layouts/default/default-footer';
import { DefaultLayoutHeader } from '~components/layouts/default/default-header';

import styles from './default-layout.module.scss';

export const DefaultLayout: FunctionComponent = ({ children }) => {
  return (
    <main className={styles.root}>
      <DefaultLayoutHeader />
      <div className={styles.templateContent}>
        <Container>{children}</Container>
      </div>
      <DefaultLayoutFooter />
    </main>
  );
};
