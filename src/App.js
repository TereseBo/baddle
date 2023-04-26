import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//components
import Banddraft from './pages/Banddraft';
import Preferences from './pages/Preferences';

//context
import { WarpProvider } from './contexts/warpContext';
import { ColorProvider } from './contexts/colorContext';

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
          </Routes>
          </div>
        </BrowserRouter>
      </ColorProvider>
    </WarpProvider>

  );
}

export default App;
