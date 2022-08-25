
import { useState } from 'react';
import '../styles-components/TodoBox-style.css'
import User from "./User"

function Issue (props){
    const [name, setName]= useState('');
    const [description, setDescription]=useState('');
    const [issue, setIssue]= useState([]);
    const [active, setActive]=useState(false)
    const [position, setPosition]=useState(0);

    const getName= (e) =>{
        setName(e.target.value);
    }
    const getDescription= (e) =>{
        setDescription(e.target.value);
    }
    const closeForm = ()=>{
        if(issue.length >= 0){
            setActive(false)
        }
    }
    const deleteIssue = (idd)=>{
       let newIssuesArray = issue.filter((issue) => issue.id != idd );
       setIssue(newIssuesArray);
    }
    const editIssue = (id) =>{
        setActive(true);
        setPosition(id)
        console.log(position);
    }
    const handleClick=(e)=>{
        e.preventDefault();
        let newIssue = {
            name:name,
            description:description, 
            id:issue.length
        }
        if(newIssue.name  != ''){
        setIssue((issue)=>[...issue, newIssue])
        setActive(false);
        }
        else{
            alert('your issue needs a name')}}
    return(
        <div>
            {
               issue.length===0 && !active ?
            <div className='issue-container'>
                <p>Upps, you don't have any issue yet!</p>
                <button className='add-issue'
                onClick={()=>{
                    setActive(true)
                }}> Add an issue </button>
            </div>
            : active?
            <div className='issue-container-form'>
                <form className = 'newIssue-form'>
                <img style={{width:'20px', alignSelf: 'end', padding:'0.5rem'}}
                src='cross.png' alt='cross' onClick={closeForm}></img>
                <label for="issue">Issue</label>
                <input className='issue-input' onChange={getName}
                 type="text" id="issue" name="newIssue" value={issue ?  issue[position].name : undefined} required/> <br/>
            <div className='descWho-container'>   
                <section>           
                    <label for="description">Description</label><br/>
                    <textarea required onChange={getDescription}
                    rows="6" cols="20"
                    id="issue-description" 
                    name="newIssueDescription"/>
                  </section>
                  <section>
                    <label for="user">who?</label>
                    <select id="user" name="user">
                        {props.user.map((user) =>
                        <option key={user.id} value=''>{user.name}</option>)
                        }
                    </select>
                </section>
            </div>
    
                <input onClick={handleClick}
                className='add-issue'
                value="submit form"
                type='button' />
                </form>
            </div>
            :
            ''
            }
            <div className="main-issues">
                { issue.length===0 || active ?
                ''
                : issue.length < 0 && active?
                <p>Hola</p>
                :
                <button className='add-issue' onClick={() =>{
                    setActive(true)
                }}>Add a new issue</button>
                }
                {issue.map((issue) =>
                <div key={issue.id} className='issue-container'>
                    <h3 className='issue-title'>{issue.name}</h3>
                    <p>{issue.description}</p>
                    <div>
                        <img onClick={()=>deleteIssue(issue.id)} style={{width: '7%'}} src='eliminar.png' alt='eliminar'></img>
                        <img onClick={()=>editIssue(issue.id)} style={{width: '7%'}} src='editar.png' alt='eliminar'></img>

                    </div>
                    <User name={(props.user).name} size={"small"}/>

                </div>)
                
                }
            </div>

            
        </div>
)};

export default Issue;