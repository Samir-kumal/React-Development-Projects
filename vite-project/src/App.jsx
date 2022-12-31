import './App.css'
import Listitems from './listitems';
import { useState } from 'react';
function App() {

  const [count, setcount ] = useState(0);


  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={ ()=> setcount(count +1) }> Click here</button>
      <h4>You have clicked {count} times</h4>
      <Listitems/>
      <p>this is just a preview app </p>
    </div>
  )
}

export default App;
