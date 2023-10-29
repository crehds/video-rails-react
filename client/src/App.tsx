import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <h1>React on Rails Blog</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <NavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
