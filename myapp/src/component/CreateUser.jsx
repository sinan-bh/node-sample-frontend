import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [uname, setUname] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, uname };
    
    await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    alert('Created Account');
    setName('')
    setEmail('')
    setUname('')
  };



  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: 
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
        <br/>
        <label>Email: 
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <br/>
        <label>Username: 
          <input 
            type="text" 
            id="username" 
            name="uname" 
            value={uname} 
            onChange={(e) => setUname(e.target.value)} 
            required 
          />
        </label>
        <br/>
        <button type="submit">Create User</button>
        <button onClick={()=> navigate('/')}>Home</button>
      </form>
    </div>
  );
}

export default CreateUser;