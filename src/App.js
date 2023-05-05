//dependencies
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
        <div className='App'>
          <Banddraft/>
          </div>
      </ColorProvider>
    </WarpProvider>

  );
}

export default App;
