import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import MainPage from './pages/MainPage'
import MovieDetail from './pages/MovieDetail'
function App() {
  return (
    <div className="App">
     
     <BrowserRouter >
     <Header />
     <Routes>
     <Route  path='/' element={<MainPage/>} />
     <Route path='/movie/:movieId' element={<MovieDetail/>} />
     </Routes>
     
     </BrowserRouter>
     
     
     </div>
  );
}

export default App;
