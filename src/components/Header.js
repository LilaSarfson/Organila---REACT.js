import React, { useState } from "react";
import "../styles-components/Header-style.css"
import User from "./User"
function Header (){
    /* const [value, setValue] = useState(false); */
    const [name, setName]=useState('');
    const [user, setUser]=useState([])
    const handleChange = (e) =>{
        setName(e.target.value);
    }
    const handleClick= (e)=>{
        let newUser = {
            id: user.length,
            name:name
           }
        setUser((user)=> [...user, newUser])
        e.preventDefault();
        console.log(user)
    }
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
                <form>
                <label for="user">Add user</label>
                <input 
                onChange={handleChange}
                 type="text" id="user" name="newUser"/>
                <input
                onClick={handleClick}
                value="submit form"
                type='button' />
                </form>
                {user.map((usuario) =>  <User name={usuario.name} id={usuario.id} key={user.length}/>)}
                <button onClick={()=>{
                }}>+</button>
            </div>

        </div>
    )

}
export default Header;

// Para re-renderizar el un componente tengo que usar el estado, entonces, tengo que sustituir el array chungo por el estado.