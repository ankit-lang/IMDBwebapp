
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Card from './components/card/Card';?
import Header from './components/Header/Header';
import Hme from './components/Pages/Hme';
import Movielist from "./components/Movielist/Movielist"
import Movie from "./components/Pages/moviedetail/Movie"


function App() {
  return (
    <div className="App">

      <BrowserRouter>
       <Header></Header>
        <Routes>
            <Route path="/" element={  <Hme/>}></Route>
            <Route path="/movie/:id" element={ <Movie/> }></Route>
            <Route path="/movies/:type" element={ <Movielist/>}></Route>
            <Route path="/*" element={ <h1>error</h1> }></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
