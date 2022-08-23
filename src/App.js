import TodoBox from "./components/TodoBox";
import Header from "./components/Header";
import './App.css';
import React, { useState } from "react";


function App() {
const [name, setName]=useState('');

  return (
    <div className="App">
     <Header 
     name={name}
     setName={setName}
     />
     <TodoBox
     who={name}
     />    
     </div>
  );
}
export default App;
