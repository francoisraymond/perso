import React from 'react';
import './App.css';
import InfosPerso from './components/InfosPerso';
import moment from 'moment';

function App() {

 moment.locale('fr');

  return (
    <div className="App">
      <InfosPerso />      
    </div>
  );
}

export default App;
