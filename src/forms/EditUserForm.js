import React, { useState,useEffect } from 'react'

function EditUserForm(props) {
    const[user,setUser]=useState(props.currentUser)
    useEffect(()=>{
          setUser(props.currentUser)  
    },[props]);
    const handleInputChange=(event)=>{
            const{name,value}=event.target
            setUser({...user,[name]:value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.updateUser(user.id,user);
       
      };
    
  return (
    <div>
         <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Update User</button>
      <button className=" button muted-button" onClick={()=>{
        props.setEditing(false);
      }}>Cancel</button>
    </form>
    </div>
  )
}

export default EditUserForm
