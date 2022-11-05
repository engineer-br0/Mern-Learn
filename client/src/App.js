import './App.css';
import Nav from './components/Nav';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/about' element={<About/>} />
      <Route  path='/signin' element={<Signin/>} />
      <Route  path='/signup' element={<Register/>} />

      </Routes>
      

    </div>
  );
}

export default App;
