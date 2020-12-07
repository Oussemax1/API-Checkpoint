import React,{ useState, useEffect } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

import axios from "axios";
function App() {
 const [data, setData] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
     const listOfUSer  = await axios.get(
       "https://jsonplaceholder.typicode.com/users"
     );
     setData(listOfUSer.data);
   };
   fetchData();
 }, []);
 return (
 	<div className="text-center mx-auto w-25 my-5 border border-info alert-warning">
 	<h3 className="alert alert-danger m-2  " > <em>My Invite List</em> </h3>
   <ul className="list-unstyled">
     {data.map(item => (
       <li key={item.id}  className=" alert alert-success m-2 py-1">
         <h4>{item.name}</h4>
       </li>
     ))}
   </ul>
   </div>
 );
}
export default App;