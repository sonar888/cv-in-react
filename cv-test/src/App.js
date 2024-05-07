// import logo from './logo.svg';
import './App.css';

import Image from './components/Image';
import Interests from './components/Interests';
import Footer from './components/Footer';
import About from './components/About';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack';




function App() {
  return (
    
      <Container  className='container'>
        <Image/>
        <About/>
       
        <Footer/>
      </Container>
   
  );
}

export default App;
