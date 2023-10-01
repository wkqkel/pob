import styles from './healthPointCard.module.scss'

interface ITag {
  tagId: string
  tag1: string
  tag2: string
  tag3: string
}

interface IProps {
  tagList: ITag | undefined
}

const TagList = ({ tagList }: IProps) => {
  const getTag = (item: string | undefined) => (item ? <li>#{item}</li> : '')

  if (!tagList) return null

  return (
    <ul className={styles.tagList}>
      {getTag(tagList?.tag1)}
      {getTag(tagList?.tag2)}
      {getTag(tagList?.tag3)}
    </ul>
  )
}

export default TagList
