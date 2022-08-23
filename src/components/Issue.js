
import { useState } from 'react';
import '../styles-components/TodoBox-style.css'

function Issue (props){
    const [name, setName]= useState('');
    const [description, setDescription]=useState('');
    const [issue, setIssue]= useState([]);
    const [active, setActive]=useState(false)

    const getName= (e) =>{
        setName(e.target.value);
    }
    const getDescription= (e) =>{
        setDescription(e.target.value);
    }
    const handleClick=(e)=>{
        e.preventDefault();
        let newIssue = {
            name:name,
            description:description, 
        }
        setIssue((issue)=>[...issue, newIssue])
        console.log(issue);
        setActive(false);
    }
    return(
        <div>
            {
                issue.length===0 && !active?
            <div className='issue-container add-issue'>
                <p>Upps, you don't have any issue yet!</p>
                <button onClick={()=>{
                    setActive(true)
                }}> Add an issue </button>
            </div>
            : active ?
            <div className='issue-container-form'>
                <form>
                <label for="issue">Issue:</label>
                <input onChange={getName}
                 type="text" id="issue" name="newIssue"/> <br/>

                 <label for="description">Description:</label>
                <textarea onChange={getDescription}
                rows="6" cols="40"
                  id="issue-description" name="newIssueDescription"/>


                {/* 
                https://es.stackoverflow.com/questions/466976/enviar-datos-de-componente-hijo-a-padre-react-js
                */}
                <label for="user">who?</label>
                <select id="user" name="user">
                    <option value=''>{props.who}</option>
                    <option value=''>{props.who}</option>
                </select><br/>

                <input onClick={handleClick}
                value="submit form"
                type='button' />
                </form>
            </div>
            :
            <div className='issue-container'>
            <p>{issue.name}</p>
            <p>{issue.description}</p>
        </div>
            }
        </div>
            )
}

export default Issue;