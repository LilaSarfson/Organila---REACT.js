import React, { useState } from "react";
import "../styles-components/Header-style.css"
import User from "./User"
function Header ({user, setUser}){
    const [name, setName]=useState('');
    const [color, setColor]=useState('');
    const getRandomInt = (max) =>{
        return Math.floor(Math.random() * max)
    }
    const handleChange = (e) =>{
        setName(e.target.value);
    }
    const handleClick= (e)=>{
        e.preventDefault();
        let newUser =  {
            id: user.length + 1,
            name:name
           }
           if(name!==''){
        setUser((user)=> [...user, newUser])
            }

            // Intento de poner random el backgroundcolor del user
        let randoNumber= getRandomInt(3);
        console.log(randoNumber)
        let colorsArray = ["#FCF8E8","#94B49F","#DF7861","#76549A"];
        setColor(colorsArray[randoNumber]);
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
                <br/>
                <input 
                onChange={handleChange}
                 type="text" id="user" name="newUser"/>
                <input
                onClick={handleClick}
                value="submit form"
                type='button' />
                </form>
                <div className="all-users">
                    {user.map((usuario) =>  <User style={{backgroundColor: color}} key={usuario.id} size={"normal"} name={usuario.name} id={usuario.id}/>)}
                </div>
            </div>

        </div>
    )

}
export default Header;
