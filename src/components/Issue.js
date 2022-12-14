
import { useState } from 'react';
import '../styles-components/TodoBox-style.css'
import { v4 as uuid } from 'uuid';
import User from "./User"



function Issue (props, {clickedIssue, setClickedIssue}){
    const [issue, setIssue]= useState([]);
    const [name, setName]= useState('');
    const [description, setDescription]=useState('');
    const [indexIssue, setIndex]= useState('');
    const [active, setActive]=useState(false);
    const [editActive, seteditActive]=useState(false);
    const [idIssue,setIdIssue]= useState('');
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
        setIdIssue(id)
        setActive(true);
        seteditActive(true);
        setIndex(index);
        console.log(idIssue)
        console.log('id del la issue es:' + issue[index].id);
    }
    const moveIssue = (id)=>{
        setClickedIssue((clickedIssue) => [...clickedIssue, issue[id]])
        console.log(clickedIssue);
    }
    const handleClick=()=>{
        if(!editActive){
            let newIssue = {
                name:name,
                description:description,
                id:unique_id,
                status: props.statusIssue,
            }
            if(newIssue.name  !== '' ){
            setIssue((issue)=>[...issue, newIssue]);
            setActive(false)
            }
            else{
                alert('your issue needs a name')}
        }
        else{
            setIdIssue(issue[indexIssue].name =name, issue[indexIssue]
                .description =description, issue[indexIssue],
                )
                // Creo que aquí tengo que añadir un user dentro de issue
            seteditActive(false)
        }
        setActive(false);
    }
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
                <label Htmlfor="issue">Issue</label>
                <input defaultValue={ editActive ? (issue[indexIssue].name) : ''} className='issue-input' onChange={getName}
                 type="text" id="issue" name="newIssue" required/> <br/>
                <div className='descWho-container'>   
                    <section>           
                        <label Htmlfor="description">Description</label><br/>
                        <textarea defaultValue={ editActive ? (issue[indexIssue].description) : ''} onChange={getDescription}
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
                        <div className='issue-icons'>
                            <img onClick={()=>deleteIssue(issue.id)} style={{width: '7%'}} src='eliminar.png' alt='eliminar'></img>
                            <img onClick={()=>editIssue(issue.id,  index)} style={{width: '7%'}} src='editar.png' alt='eliminar'></img>
                            <img  onClick={()=>moveIssue(issue.id)} style={{width: '7%'}} src='arrow-right.png' alt='cambiarZona' ></img>
                        </div>
                        {/* Necesito decirle que un usuario puede estar en más de una Issue */}
                        <User color={props.user[index].color} name={props.user[index].name} size={"small"}/>
                    </div>)
                    }
              
            </div>

            
        </div>
)};

export default Issue;