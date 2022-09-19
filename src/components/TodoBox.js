
import '../styles-components/TodoBox-style.css'
import { useState } from 'react';
import Issue from './Issue'

function TodoBox(props){
    const [statusIssue, setStatus]=useState(0);
    const [inProgress, setinProgress]=useState([])
    const [issueProp,setIssueProp]=useState([])
    const moveIssue = (e) =>{
        if (e.target.alt === 'cambiarZona'){
        setStatus(statusIssue + 1)
        console.log(issueProp)
        ;}
        else{console.log('no entrop')}
    }
    return (
        <div className='box-container'>
           <div className='box toDo'>
            <h2>To Do</h2>
            <Issue
            issueProp={issueProp}
            setIssuePro={setIssueProp}
            inProgress={inProgress}
            setinProgress={setinProgress}
            statusIssue={statusIssue}
             user={props.user} 
             moveIssue={(e)=> moveIssue(e)}
             />
            </div>
           <div className='box'><h2>In progress</h2></div>
           <div className='box'><h2>Done</h2></div>
           <div className='box'><h2>Commets</h2></div>
        </div> 

    )
}
export default TodoBox;