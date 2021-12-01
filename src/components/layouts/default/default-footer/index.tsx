import { Container } from '~components/atoms/container';
import styles from './default-footer.module.scss'

export const DefaultLayoutFooter = () => {
  return(
    <footer className={styles.root}>
      <Container>
        AG Assessment
      </Container>
    </footer>
  )
}