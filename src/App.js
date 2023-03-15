import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import  Home  from './Home.js';
import OrderDetails from './OrderDetails';
import Upload from './Upload';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Orders" element={<OrderDetails/>}/>
          <Route exact path="/Upload" element={<Upload/>}/>
        </Routes>
    </Router>
  );
}

export default App;
