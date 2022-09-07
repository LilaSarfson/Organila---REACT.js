import React, { useState} from "react";
import "../styles-components/Header-style.css"
import User from "./User"
function Header ({user, setUser}){
    const [name, setName]=useState('');
    const [color, setColor]=useState('');
    const createBackground = ()=>{
        let randoNumber= getRandomInt(3);
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
        console.log('index=' + user.index)
        let newUser =  {
            name:name,
            color:color,
            id:''
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

                    {user.map((usuario, index) =>
                    <User color={usuario.color} key={index} size={"normal"} name={usuario.name} id={index}/>)}
                </div>
            </div>

        </div>
    )

}
export default Header;
