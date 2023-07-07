import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Addmovies, Home } from './components/Addmovie';
import Header from './components/Header';
import { useState } from 'react';
import About from './components/About';

function App() {
  const [data, setMovie] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home data={data} />} />
          <Route exact path="/add" element={<Addmovies data={data} setMovie={setMovie} />} />
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;