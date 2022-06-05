import styles from './spinner.module.scss'
import cx from 'classnames'

interface Props {
  isLoading: boolean
}

const Loading = ({ isLoading }: Props) => {
  if (!isLoading) return null

  return <div className={styles.loading} />
}

export default Loading
