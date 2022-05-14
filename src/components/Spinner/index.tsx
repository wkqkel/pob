import styles from './spinner.module.scss'
import cx from 'classnames'

interface Props {
  isMiddle: boolean
}

const Loading = ({ isMiddle }: Props) => {
  return <div className={cx(styles.loading, { [styles.middle]: isMiddle })} />
}

export default Loading
