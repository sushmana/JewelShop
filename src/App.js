import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Header from './components/header';
import Footer from './components/footer'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Container className='py-2'>
           <Outlet/>
          </Container>
        </main>
        <Footer/>
      </div>
    </Router>
)}

export default App;
