import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import Search from './SearchPage'
import Bookmark from './BookmarkPage'
import PageTemplate from '../components/Layout'
import { useEffect, useGA, useMount } from 'hooks'

const App = () => {
  const { initializeGA, gaPV } = useGA()
  const { pathname, search } = useLocation()

  useMount(() => {
    initializeGA()
  })

  useEffect(() => {
    gaPV(`${pathname}${search}`)
  }, [gaPV, pathname, search])

  return (
    <Routes>
      <Route path='/' element={<PageTemplate />}>
        <Route path='/' element={<Search />} />
        <Route path='bookmark' element={<Bookmark />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  )
}

export default App
