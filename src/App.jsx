
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';

import Login from './pages/Login';
import Register from './pages/Register';
import Tarix from './pages/Lessons/Tarix';
import Kultur from './pages/Lessons/Kultur';
import Cografiya from './pages/Lessons/Cografiya';
import Dil from './pages/Lessons/Dil';
import  Footer  from './components/Footer/Footer';
import Olimpiada from './pages/Projects/Olimpiada';
import ScrollUpButton from './components/Scrollup/ScrollUpButton';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/tarix' element={<Tarix/>}/>
        <Route path='/kültür' element={<Kultur/>}/>
        <Route path='/dil' element={<Dil/>}/>
        <Route path='/cografiya' element={<Cografiya/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/ortaq_turk_dunyasi_olimpiadasi' element={<Olimpiada/>}/>
      </Routes>
      <ScrollUpButton/>
      <Footer/>
    </Router>
  );
};

export default App;