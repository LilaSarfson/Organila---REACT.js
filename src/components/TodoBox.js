
import '../styles-components/TodoBox-style.css'
import { useState } from 'react';
import Issue from './Issue'

function TodoBox(props){
    const [statusIssue, setStatus]=useState(1);
    const [issue, setIssue]= useState([]);
    let toDoArray=[];
    let inProgressArray=[];
    let doneArray=[];
    const moveIssue = (e) =>{
        setStatus(statusIssue + 1);
        if(issue.setStatus===0){
            issue.push(toDoArray)
        }
        else if (issue.statusIssue===1){
            issue.push(inProgressArray);
        }
        else if(issue.statusIssue===2){
            issue.push(doneArray)
        }
        else{
            return;
        }
        console.log(inProgressArray)
    }
    return (
        <div className='box-container'>
           <div className='box toDo'>
            <h2>To Do</h2>
            <Issue
             user={props.user} 
             moveIssue={(e)=> moveIssue(e)}
             statusIssue={statusIssue}
             setStatusIssue={setStatus}
             issue={issue}
             setIssue={setIssue}
             />
            </div>
           <div className='box'><h2>In progress</h2></div>
           <div className='box'><h2>Done</h2></div>
           <div className='box'><h2>Commets</h2></div>
        </div> 

    )
}
export default TodoBox;