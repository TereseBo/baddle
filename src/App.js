//dependencies
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//contexts
import { WarpProvider } from './contexts/warpContext';
import { ColorProvider } from './contexts/colorContext';
//components
import Banddraft from './pages/Banddraft';
//style
import './App.scss';
function App() {
  return (

    <WarpProvider>
      <ColorProvider>
        <BrowserRouter>
        <div className='App'>
          <header className="App-header">
            <Link to="/">Start</Link>
            <Link to="/draft">Draft</Link>
          </header>
          <Routes>
            <Route path='/draft' element={<Banddraft />} />
            <Route path='/' element={<Banddraft />} />
            <Route path='/baddle' element={<Banddraft />} />

          </Routes>
          </div>
        </BrowserRouter>
      </ColorProvider>
    </WarpProvider>

  );
}

export default App;
