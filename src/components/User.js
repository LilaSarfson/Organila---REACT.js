import "../styles-components/Header-style.css"

function User (props){
    let className ="";
    if (props.size === "normal"){
        className = "user-box"
    }
    else if (props.size === "small"){
        className = "small-user-box"
    }
    return(
        <div style={{backgroundColor: (props.color)}} className={className} >
            <p>{props.name}</p>
        </div>  
    )
}
export default User;