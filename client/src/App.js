import './App.css';
import Nav from './components/Nav';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Signin from './components/Signin';
import Contact from './components/Contact';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/about' element={<About/>} />
      <Route  path='/signin' element={<Signin/>} />
      <Route  path='/signup' element={<Register/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/logout' element={<Logout/>} />

      </Routes>
      

    </div>
  );
}

export default App;
