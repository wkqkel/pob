import styles from './spinner.module.scss'

interface Props {
  isLoading: boolean
}

const Loading = ({ isLoading }: Props) => {
  if (!isLoading) return null

  return <div className={styles.loading} />
}

export default Loading
