import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Content from "./Components/Content";
import Offers from "./Components/Offers";
import Works from "./Components/Works";
import Footer from "./Components/Footer";

class App extends React.Component {
  state = {
    contactDetails : {},
  };
  saveContactDetails= (contactDetails)=>{
    console.log('I am adding the contact details');
  }
  render(){
    return (
    <div className="App">
      <Header saveContactDetails={this.saveContactDetails}/>
      <Intro/>
      <Content/>
      <Offers/>
      <Works/>
      <Footer/>
    </div>
  );
  }
}

export default App;
