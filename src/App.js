import React from 'react';
import './App.css';
import AgeChange from "./components/age_change/age_change";
import Counter  from "./components/name_change/name_change";
import NameChange from "./components/counter/counter";
import DisplayStore from './components/display_store/display_store'


// There is no parent state. All of the state live on redux for this 
// application.
function App() {
  return (
    <div className="App">
      <AgeChange/>
      <Counter/>
      <NameChange/>
      <DisplayStore/>
    </div>
  );
}

export default App;
