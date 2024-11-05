import { useEffect } from 'react'
import './App.css'
import setRandomBackgroundColor from './components/RandomBackground'
import Carrousel from './components/InteractiveCarrousel';

function App() {

  useEffect(() => {
    setRandomBackgroundColor();
  }, []);

  return (
    <div className='App'>
      <div className='Carrousel'>
        <Carrousel />
      </div>
    </div>
  )
}

export default App;
