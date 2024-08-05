import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UserDetails() {
    const [user,setUser] = useState([]);
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{

        fetch(`https://node-sample-backend-2.onrender.com/users/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setUser(data);
            console.log(data);
            
        })
        .catch(err => console.error('Error fetching user:', err));
    },[])


    const handleDelete = (id) => {
        const userConfirmed = window.confirm("Do you want to proceed?");
        if (userConfirmed) {
            
            fetch(`https://node-sample-backend-2.onrender.com/users/${id}`,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(()=>{
    
                navigate('/')
            })
            alert('Deleted Account')
        }else{
            alert("User clicked Cancel");
        }
    }

    const handleUpdate = (id) =>{
        navigate(`/${id}/${id}`)
    }
    
  return (
    <div>
       <div>
            <h1>Users Details</h1>
        </div>
        <div key={user.id}>
        <div>Name :{user.name}</div>
        <div>E-mail:{user.email}</div>
        <div>UserName:{user.uname}</div>
        </div>
        <button onClick={()=>handleUpdate(user.id)}>Update</button>
        <button onClick={()=>handleDelete(user.id)}>Delete</button>
    </div>
  )
}

export default UserDetails
