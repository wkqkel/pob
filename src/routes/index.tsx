import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useMount } from 'react-use';

import { themeState } from 'states/atom';

import Layout from '../components/Layout';
import Work from './Work';
import Home from './Home';
import Contact from './Contact';

const App = () => {
  const [theme] = useRecoilState(themeState);

  useMount(() => {
    document.documentElement.setAttribute('color-theme', theme);
  });

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
