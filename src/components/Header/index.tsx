import styles from './styles.module.scss'

export function Header() {
  return (
    <div className={styles['header-container']}>
      Header
      <div>
        <div>local</div>
        <div>cart</div>
      </div>
    </div>
  )
}
