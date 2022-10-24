import './App.css';
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import AboutMePage from './pages/AboutMePage/AboutMePage';
import SquidPage from './pages/SquidPage/SquidPage';
import WalletPage from './pages/WalletPage/WalletPage';
import NotDevPage from './pages/NotDevPage/NotDevPage';


function App() {
  return (
    <div className="App">


      <Homepage /> 

      <Routes>
        <Route path='/aboutme' element={AboutMePage} /> 
        <Route path='/details/squidgame' element={SquidPage} /> 
        <Route path='/details/virtwallet' element={WalletPage} /> 
        <Route path='/details/notdevastated' element={NotDevPage} /> 
    </Routes>
     
      
    </div>
  );
}

export default App;
