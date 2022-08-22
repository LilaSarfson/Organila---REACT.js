import "../styles-components/Header-style.css"
function User (props){

    return(
        <div className="user-box" >
            <p>{props.name}</p>
            <p>{props.id}</p>
        </div>  
    )
}
export default User;