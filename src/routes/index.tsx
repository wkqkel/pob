import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useMount } from 'react-use';

import { themeState } from 'states/atom';

import Layout from '../components/Layout';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Detail from './Detail';

const App = () => {
  const [theme] = useRecoilState(themeState);

  useMount(() => {
    document.documentElement.setAttribute('color-theme', theme);
  });

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='work' element={<Work />} />
        <Route path='/detail/:projectName' element={<Detail />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
