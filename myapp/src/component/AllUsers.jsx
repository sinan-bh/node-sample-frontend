import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AllUsers() {

    const [user,setUser] = useState([])
    const navigate = useNavigate();


    useEffect(()=>{

        fetch('https://node-sample-backend-2.onrender.com/users')
        .then(res=>res.json())
        .then(data=>{
            const value = data.filter(list=>list.id)
            setUser(data)
            console.log(value);
            
        })
    },[])

    console.log(user);
    
  return (
    <div>
        <div>
            <h1>All Users</h1>
        </div>
        <div>
            <button onClick={()=> navigate('/createuser')}>Create Account</button>
        </div>
        {user.map(list=>(
            <div key={list.id}>
                <div>UserName:{list.uname}</div>
                <button onClick={()=> navigate(`/${list.id}`)}>details</button></div>
        ))}
    {/* </div> */}
    </div>
  )
}

export default AllUsers
