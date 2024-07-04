

import { useState } from "react";

import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/addUserForm";
import EditUserForm from "./forms/EditUserForm";

function App() {
  
  const usersData = [
    {id:1,name:'Guhan',username:'20ISR016'},
    {id:2,name:'Kathir',username:'20ISR021'},
    {id:3,name:'Ragu',username:'20ISR050'},
];

const addUser = (user)=>{
    user.id = users.length + 1;
    setUsers([...users,user])
}
const deleteUser = (id)=>{
    setUsers(users.filter((user)=>user.id!==id))
  
}
   const[editing,setEditing]=useState(false)
   const initialFormState = { id: null, name: '', username: '' };
   const[currentUser,setCurrentUser]=useState(initialFormState)
   const [users,setUsers] = useState(usersData);
   
   const editRow=(user)=>{
      setEditing(true);
      setCurrentUser({id:user.id,name:user.name,username:user.username})
   }
    
  const updateUser=(id,updatedUser)=>{
      setEditing(false);
      setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
  }
  return (

    <div className="container">
    <h1>CRUD App with Hooks</h1>
    <div className="flex-row">
      <div className="flex-large">
        {editing?(<div>
            <h2>Edit User</h2> 
            <EditUserForm 
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}

            />  
        </div>):
        (
          <div>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
          </div>
        )
        }
        
           
      
      </div>
      <div className="flex-large">
        <h2>View users</h2>
        <UserTable  editRow={editRow} deleteUser={deleteUser} users={users} />
      </div>
    </div>
  </div>
     
    
  );
}

export default App;
