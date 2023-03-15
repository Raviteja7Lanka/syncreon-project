import logo from './syncreon logo.png';
import './App.css';
import React from "react";
import {Button} from 'react-bootstrap';
import Image2 from "./Image2.jpeg"
import { useNavigate } from 'react-router-dom';

function Home () {
  const navigate = useNavigate();
    return(
    <div className="App">
      <header className="App-header">
        <div className='container'>
        <div class="row">
          <div class="col-6" style={{}}>
            <img src= {Image2} alt="Image" width="650" height="550" style ={{marginRight:'20px'}}/>
          </div>
          <div class="col-6" >
            <img src={logo} alt="Image2" style={{display:'-ms-grid' ,paddingTop:'120px'}} />
              <p>
               Welcome to Syncreon Project.
              </p>
            <Button className='btn-primary' onClick={()=> navigate('/Orders')}>View Orders</Button>
          </div>
          
        </div>
        </div>
        
      </header>
    </div>
    
    );
}

export default Home;