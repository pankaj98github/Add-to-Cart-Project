import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Cards/>} />
      <Route exact path='/cart/:id' element={<CardsDetails/>} />
    </Routes>
    </>
  );
}

export default App;
