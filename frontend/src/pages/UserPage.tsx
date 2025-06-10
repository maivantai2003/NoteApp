
import React, { useEffect, useState } from "react";
import { api } from "../services/api";
interface User {
  _id?: string;
  name: string;
  email: string;
}
const UserPage:React.FC=()=>{
    const [users,setUsers]=useState<User[]>([])
    const [newUser,setNewUser]=useState<User>({name:'',email:""})
    useEffect(()=>{
        api.get("/users").then(res=>setUsers(res.data))
    },[]);
    const createUser=async()=>{
        const res=await api.post('/users',newUser)
        setUsers([...users,res.data])
        setNewUser({name:'',email:""})
    };
    return (
        <div>
        <h2>Users</h2>
        <input value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} placeholder="Name" />
        <input value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} placeholder="Email" />
        <button onClick={createUser}>Add User</button>

        <ul>
            {users.map(user => (
            <li key={user._id}>{user.name} - {user.email}</li>
            ))}
        </ul>
        </div>
    );
    
}

export default UserPage;