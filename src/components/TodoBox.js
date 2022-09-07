
import '../styles-components/TodoBox-style.css'
import Issue from './Issue'
function TodoBox(props){
    const moveIssue = () =>{
        console.log('hola')
    }
    return (
        <div className='box-container'>
           <div className='box toDo'>
            <h2>To Do</h2>
            <Issue user={props.user} moveIssue={moveIssue}/>
            </div>
           <div className='box'><h2>In progress</h2></div>
           <div className='box'><h2>Done</h2></div>
           <div className='box'><h2>Commets</h2></div>
        </div> 

    )
}
export default TodoBox;