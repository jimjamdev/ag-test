import { Container } from '~components/atoms/container';
import styles from './default-header.module.scss'

export const DefaultLayoutHeader = () => {
  return(
    <header className={styles.root}>
      <Container>
        AG Assessment
      </Container>
    </header>
  )
}