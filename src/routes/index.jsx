import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loading from 'components/Loading'

import Search from './Search'
import Bookmark from './Bookmark'
import PageTemplate from '../components/Layout'

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<PageTemplate />}>
          <Route path='/' element={<Search />} />
          <Route path='bookmark' element={<Bookmark />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
