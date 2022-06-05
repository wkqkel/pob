import styles from './search.module.scss'
import { SearchIcon } from 'assets/svgs'

interface IProps {
  isNotFound: boolean
  errorMessage: string
}

const NotFound = ({ isNotFound, errorMessage }: IProps) => {
  if (!isNotFound) return null

  return (
    <div className={styles.notFound}>
      <SearchIcon />
      <span>{errorMessage}</span>
    </div>
  )
}

export default NotFound
