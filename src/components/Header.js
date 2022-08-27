import React, { useState } from "react";
import "../styles-components/Header-style.css"
import User from "./User"
function Header ({user, setUser}){
    const [name, setName]=useState('');
    const [color, setColor]=useState('');
    const createBackground = ()=>{
        let randoNumber= getRandomInt(3);
        console.log(randoNumber)
        let colorsArray = ["#FCF8E8","#94B49F","#DF7861","#76549A"];
        setColor(colorsArray[randoNumber]);
    }
    const getRandomInt = (max) =>{
        return Math.floor(Math.random() * max)
    }
    const handleChange = (e) =>{
        setName(e.target.value);
        createBackground();
    }
    const handleClick= (e)=>{
        let newUser =  {
            id: user.length + 1,
            name:name,
            color:color
           }
           if(name!=='' && user.length !== 4){
        setUser((user)=> [...user, newUser])
            }
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
                <h3 style={{margin: 0}}>¿A quién le toca?</h3>
                <h4 style={{margin: 0}}>Add user</h4>
                <form onSubmit={(e)=>{e.preventDefault()}}>
                <br/>
                <input className="input-user"
                onChange={handleChange}
                 type="text" id="user" name="newUser"/>
                <input className="add-user"
                onClick={handleClick}
                value="Acept"
                type='button' />
                </form>
                <div className="all-users">
                    {user.map((usuario) =>  <User color={usuario.color} key={usuario.id} size={"normal"} name={usuario.name} id={usuario.id}/>)}
                </div>
            </div>

        </div>
    )

}
export default Header;
