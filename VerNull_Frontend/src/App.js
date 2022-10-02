import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/header/Header';
import Resources from './pages/Resources/Resources';
import song from './Assets/song.mp3'
import { useEffect, useState } from 'react';
function App() {
  const [audio, setAudio] = useState();
  useEffect(() => {
    setInterval(() => {
      let a = new Audio(song);
      alert('You are working for long time. Now you need take some rest. ')
      setAudio(a);
      a.play();
      setTimeout(()=>{
        a.pause();
      },20000, a)
    }, 1200000)

  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/resources' element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
