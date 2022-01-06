import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Login from '../pages/Login';

const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/menu'} element={<Menu/>}/>
          <Route path={'/entrar'} element={<Login/>}/>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/'} element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default Rotas;