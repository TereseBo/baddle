import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//components
import Banddraft from './pages/Banddraft';
import Preferences from './pages/Preferences';

//context
import { WarpProvider } from './contexts/warpContext';

function App() {
  return (

    <WarpProvider>
      <BrowserRouter>
        <header className="App-header">
          <Preferences />
          <Link to="/">Start</Link>
          <Link to="/draft">Draft</Link>
        </header>
        <Routes>
          <Route path='/draft' element={<Banddraft />} />
        </Routes>
      </BrowserRouter>
    </WarpProvider>

  );
}

export default App;
