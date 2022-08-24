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
        <div className={className} >
            <p>{props.name}</p>
            <p>{props.id}</p>
        </div>  
    )
}
export default User;