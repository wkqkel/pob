import { Navigate, Route, Routes } from 'react-router-dom'
import Loading from 'components/Loading'

import Search from './Search'
import Bookmark from './Bookmark'
import PageTemplate from '../components/Layout'

import { useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { bookmarkMovieList } from 'states/atom'
import { useRecoilState } from 'recoil'
import { ISearchItem } from 'types/movie'

const App = () => {
  const [bookmarkedList, setBookmarkedList] = useRecoilState(bookmarkMovieList)

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result
    // 드롭이 droppable 밖에서 일어났을 경우 바로 return

    if (!destination) {
      return
    }
    const currentList = [...bookmarkedList]
    const draggingItemIndex = result.source.index
    const dropItemIndex = destination.index
    // 드래그한 요소를 배열에서 삭제
    const removeForm = currentList.splice(draggingItemIndex, 1)
    // 드롭한 위치에 드래그한 요소를 추가
    currentList.splice(dropItemIndex, 0, removeForm[0])
    setBookmarkedList(currentList)
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Routes>
        <Route path='/' element={<PageTemplate />}>
          <Route path='/' element={<Search />} />
          <Route path='bookmark' element={<Bookmark />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </DragDropContext>
  )
}

export default App
