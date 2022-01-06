import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';


const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/menu'} element={<Menu/>}/>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/'} element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default Rotas;