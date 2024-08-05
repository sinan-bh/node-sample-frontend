import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {

    const [vname,setVname] = useState('')
    const [vemail,setVemail] = useState('')
    const [vuname,setVuname] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{

        fetch(`http://localhost:5000/users/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setVname(data.name);
            setVemail(data.email);
            setVuname(data.uname);
            console.log(data);
            
        })
        .catch(err => console.error('Error fetching user:', err));
    },[id])

    

    const handleSubmit = async(e) => {
        e.preventDefault()
        const updateUser = {name: vname,email: vemail,uname: vuname} 

        await fetch(`http://localhost:5000/users/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateUser)
        })
        navigate(`/${id}`)
    }

  return (
    <div>
        <h1>Update Details</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='vname' value={vname} onChange={(e)=> setVname(e.target.value)} /><br />
        <input type="email" name='vemail' value={ vemail} onChange={(e)=> setVemail(e.target.value)} /><br />
        <input type="text" name='vuname' value={vuname} onChange={(e)=> setVuname(e.target.value)} /><br />
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default UpdateUser
