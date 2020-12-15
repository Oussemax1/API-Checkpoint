import { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
const [users, setUsers] = useState([]);
const getUsers = async () => {
    try {
  const userPosts = await axios.get("https://jsonplaceholder.typicode.com/users")
      
      setUsers(userPosts.data);
    
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(()=>{
      
      getUsers()
  },[])


    return (
      <div className="users ">
       
             {
                users.map(user => (<p key={user.id}>{user.name}</p>))
            }
        
      </div>
    );
  }

export default UserList;