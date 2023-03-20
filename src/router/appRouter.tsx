import { Route, Routes } from 'react-router-dom';
import { Error } from 'pages/404';
import { Home } from 'pages/home';
import { Pokedex } from 'pages/pokedex';
import { Compare } from 'pages/compare';
import { Legend } from 'pages/legend';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/compare" element={<Compare/>}/>
      <Route path="/legend" element={<Legend/>}/>
      <Route path="/pokedex" element={<Pokedex/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
};
