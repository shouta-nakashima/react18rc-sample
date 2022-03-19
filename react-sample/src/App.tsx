import './App.css';
import {Header,Container} from '../src/components'
import { useState } from "react";

function App() {
  const [value,setValue] = useState('Content details')
  return (
    <div className="App">
      <main className="App-container" >
        <Header value={value} setValue={setValue}/>
        <Container value={value} setValue={setValue}/>
      </main>
    </div>
  );
}

export default App;