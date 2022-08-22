import React from "react";
import "../styles-components/Header-style.css"
import User from "./User"
function Header (){
    const userList = [1,2];
    return(
        <div className="main-header">
             <div className="header-title">
                <div className="title-box">
                    <h1>Organila</h1>
                    <img className="icon" src="planet.png" alt="planeta"></img>
                </div>
                    <h3>¡Tareas mejor organizadas! </h3>
            </div>

            <div className="header-users">
                <h3>¿A quién le toca?</h3>
                {userList.map((user) =>  <User key={user}/>)};
                <button onClick={()=>{
                    userList.push((userList.length)+1)
                    console.log(userList)
                    console.log(userList.length)
                }}>+</button>
            </div>

        </div>
    )

}
export default Header;

// Para re-renderizar el un componente tengo que usar el estado, entonces, tengo que sustituir el array chungo por el estado.