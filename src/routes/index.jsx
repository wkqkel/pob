import { Navigate, Route, Routes } from 'react-router-dom'

import Search from './Search'
import Bookmark from './Bookmark'
import PageTemplate from '../components/Layout'

const App = () => {
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
