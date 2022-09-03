
import { useState } from 'react';
import '../styles-components/TodoBox-style.css'
import { v4 as uuid } from 'uuid';
import User from "./User"



function Issue (props){
    const [name, setName]= useState('');
    const [description, setDescription]=useState('');
    const [issue, setIssue]= useState([]);
    const [index, setIndex]= useState('');
    const [active, setActive]=useState(false);
    const [editActive, seteditActive]=useState(false);
    const unique_id = uuid();
    const getName= (e) =>{
        setName(e.target.value);
    }
    const getDescription= (e) =>{
        setDescription(e.target.value);
    }
    const closeForm = ()=>{
        seteditActive(false);
        if(issue.length >= 0){
            setActive(false)
        }
    }
    const deleteIssue = (idd)=>{
       let newIssuesArray = issue.filter((issue) => issue.id !== idd );
       setIssue(newIssuesArray);
    }
    const editIssue = (id, index) =>{
        setActive(true);
        seteditActive(true);
        setIndex(index);
        deleteIssue(id);
        console.log('position= ' + index)
        console.log('position.name=' + issue[index].name);
    }
    const handleClick=()=>{
        seteditActive(false);
        let newIssue = {
            name:name,
            description:description, 
            id:unique_id
        }
        if(newIssue.name  !== ''){
        setIssue((issue)=>[...issue, newIssue])
        setActive(false);
        console.log('props.user= ' + props.user[0].name)
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
            <form onSubmit={(e)=>{e.preventDefault()}} className = 'newIssue-form'>
                <img style={{width:'20px', alignSelf: 'end', padding:'0.5rem'}}
                src='cross.png' alt='cross' onClick={closeForm}></img>
                <label for="issue">Issue</label>
                <input defaultValue={ editActive ? issue[index].name : ''} className='issue-input' onChange={getName}
                 type="text" id="issue" name="newIssue" required/> <br/>
                <div className='descWho-container'>   
                    <section>           
                        <label Htmlfor="description">Description</label><br/>
                        <textarea defaultValue={ editActive ? issue[index].description : ''} onChange={getDescription}
                        rows="6" cols="20"
                        id="issue-description" 
                        name="newIssueDescription"/>
                    </section>
                    <section>
                        <label Htmlfor="user">who?</label>
                        <select  id="user" name="user">
                            {props.user.map((user, index) =>
                            <option key={index} defaultValue={editActive ? user.user: ''}>{user.name}</option>)
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
                : 
                <button className='add-issue' onClick={() =>{
                    setActive(true)
                }}>Add a new issue</button>
                }
                    {issue.map((issue, index) =>
                    <div key={index} className='issue-container'>
                        <h3 className='issue-title'>{issue.name}</h3>
                        <p>{issue.description}</p>
                        <div>
                            <img onClick={()=>deleteIssue(issue.id)} style={{width: '7%'}} src='eliminar.png' alt='eliminar'></img>
                            <img onClick={()=>editIssue(issue.id,  index)} style={{width: '7%'}} src='editar.png' alt='eliminar'></img>

                        </div>
                        {/* <User color={props.user[props.key].color} name={props.user[props.key].name} size={"small"}/> */}
                    </div>)
                    }
              
            </div>

            
        </div>
)};

export default Issue;