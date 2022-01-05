import './App.css';
import { useState } from 'react';
import ButtonList from './components/ButtonList';


function App() {
  const [buttonState, setButtonState] =  useState({
    text: "Where are you?", 
    divVis: false, 
    number: 10
  });

  const toggleVis = () => {
    setButtonState((state) => {return {
      text: state.divVis ? "Where are you?" : "Be gone!",
      divVis: !state.divVis,
      number: state.divVis ? state.number - 1 : state.number,
    }});
  };

  return (
    <div className="App">
      <ButtonList number={buttonState.number} text={buttonState.text} onClick={toggleVis} />
      {buttonState.divVis && <div className={'text'} >I'm here!</div>}
    </div>
  );
}

export default App;
