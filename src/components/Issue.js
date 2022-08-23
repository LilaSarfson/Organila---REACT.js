import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import { useState } from 'react';
import '../styles-components/TodoBox-style.css'

function Issue (props){
    const [name, setName]= useState('');
    const [description, setDescription]=useState('');
    const [issue, setIssue]= useState([]);
    const [active, setActive]=useState(false)
    return(
        <div>
            {
                issue && !active?
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
                <input 
                 type="text" id="issue" name="newIssue"/> <br/>
                 <label for="description">Description:</label>
                <textarea rows="6" cols="40"
                  id="issue-description" name="newIssueDescription"/>
                <label for="user">who?</label>
                <select id="user" name="user">
                    <option value='Carlos'>Carlos</option>
                    <option value='Lila'>Lila</option>
                </select><br/>
                <input
                value="submit form"
                type='button' />
                </form>
            </div>
            :
            <div className='issue-container'>
            <p></p>
        </div>
            }
        </div>
            )
}

export default Issue;