import TodoBox from "./components/TodoBox";
import Header from "./components/Header";
import './App.css';
import React, { useState } from "react";


function App() {
const [user, setUser]=useState([]);
let classNameApp=""
if (user.length === 0){
  classNameApp = "main-app"
}else{
  classNameApp = "main-app-users"
}
  return (
    <div className="App">
      <div className={classNameApp}>
        <Header
        user={user}
        setUser={setUser}
        />
        <TodoBox
        user={user}
        />
      </div>  
     </div>
  );
}
export default App;
