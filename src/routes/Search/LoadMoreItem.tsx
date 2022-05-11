import { useRef, useEffect, Dispatch, SetStateAction } from 'react'

interface ILoadMoreItemProps {
  setPageNumber: Dispatch<SetStateAction<number>>
}

const LoadMoreItem = ({ setPageNumber }: ILoadMoreItemProps) => {
  const listEndRef = useRef<any>()

  const observer = new IntersectionObserver((entry) => {
    if (entry[0].isIntersecting && entry[0].intersectionRatio > 0.1) {
      setPageNumber((page) => page + 1)
    }
  })

  useEffect(() => {
    observer.observe(listEndRef.current)
    return () => {
      observer.unobserve(listEndRef.current)
    }
  }, [])

  return <div ref={listEndRef} />
}

export default LoadMoreItem
