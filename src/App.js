import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink to='/'>Home</NavLink>

          <NavLink to='/cart'>Cart</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
