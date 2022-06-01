import { Route, Routes } from 'react-router-dom';
import Layout from './_shared/Layout';
import Work from './Work';
import Main from './Main';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='work' element={<Work />} />
      </Route>
    </Routes>
  );
};

export default App;
