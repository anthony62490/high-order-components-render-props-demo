import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import AddName from './AddName';
import SwapiContainer from './SwapiContainer';
import AutoCompleteBar from './AutoCompleteBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Button style={{color:'#996699', background:'#BADA55'}}
        handleClick={() => alert('clicked')}/>
        <Button/> */}
        {/* <AddName render={(state) => <h1>{state.name}</h1>}/> */}
        {/* <AddName>
          {(state) => <h1>{state.name}</h1>}
        </AddName>        
        <SwapiContainer render={state => state.data.map(val => 
          <div>
            <p>{val.name} {val.surface_water}</p>
          </div>)}/> */}
          <AutoCompleteBar/>
        
      </div>
    );
  }
}

export default App;
