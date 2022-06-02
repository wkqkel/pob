import { Route, Routes } from 'react-router-dom';
import Layout from './_shared/Layout';
import Work from './Work';
import Home from './Home';
import Contact from './Contact';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='work' element={<Work />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
