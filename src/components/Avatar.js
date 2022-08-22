import { useState } from "react";

function Avatar ({id}){
    let [activado, cambiarActivacion] = useState(true);
let src = `https://xsgames.co/randomusers/assets/avatars/male/${id}.jpg`;
    return (
        <div>
            {activado ? (<p> Activado </p>) : (<p> Desctivado </p>)}
            <h1>Lila</h1>
            <img 
            onClick={()=> {cambiarActivacion(!activado)}} 
            src={src} alt="Avatar" />
        </div> 

    )
}
export default Avatar;