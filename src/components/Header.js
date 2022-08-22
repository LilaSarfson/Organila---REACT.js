import React, { useState } from "react";
import "../styles-components/Header-style.css"
import User from "./User"
function Header (){
    const [name, setName] = useState('');
    const [user, setUser]=useState([])
    const inputValue = (input) =>{
    console.log(user)
    }
    // const userList = [{
    //     id:1,
    //     name:'Lila',
    // },{
    //     id:2,
    //     name:'Carlos',
    // },{
    //     id:3,
    //     name:'Noa',
    
    // }];
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

                // cambiar algo aqui, el evento lo tiene que capturar este input pero lo tiene que enviar el de abajo
                onSubmit={(e)=>{
                    let value = e.target.value;
                    let newUser = {
                        id: user.length,
                        name:value
                    }
                    setUser((user) => [...user, newUser])
                }}
                 type="text" id="user" name="newUser"/>
                <input
                value="submit form"
                onClick={inputValue}
                type='button' />
                </form>
                {user.map((usuario) =>  <User name={usuario.name} id={usuario.id} key={usuario}/>)}
                <button onClick={()=>{
                    // userList.push((userList.length)+1)
                    // console.log(userList)
                    // console.log(userList.length)
                }}>+</button>
            </div>

        </div>
    )

}
export default Header;

// Para re-renderizar el un componente tengo que usar el estado, entonces, tengo que sustituir el array chungo por el estado.