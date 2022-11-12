import './App.css';
import LandingPage from './components/landing';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
    
  );
}

export default App;
