import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Netflix from './pages/Netflix';
import TvShow from './pages/TvShow';
import MoviePage from './pages/MoviePage';
import Player from './pages/Player';
import BackgroundImage from './components/BackgroundImage';
import Header from './components/Header';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Netflix />}></Route>
        <Route exact path='/login' element={<LoginPage />}></Route>
        <Route exact path='/signup' element={<SignUpPage />}></Route>
        <Route exact path='/tv' element={<TvShow />}></Route>
        <Route exact path='/movie' element={<MoviePage />}></Route>
        <Route exact path='/player' element={<Player />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
