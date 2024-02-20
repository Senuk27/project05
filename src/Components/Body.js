/// Body.js

import './Body.css'; 

import React, { useState, useEffect } from 'react';

function Body() {
  const [users, setUsers] = useState([]); //setting the useState

  useEffect(() => {
    fetch('https://dummyjson.com/users')//fetching the data from json file
      .then(response => response.json()) //getting the response
      .then(data => {
        console.log('Fetched data:', data); //fetching the data from json
        console.log('Fetched data users:', data.users); //converting it to array to overcome the error.first it occures a error when data is there.when modifing it to 'data.users' it executes.data is a object where we are checking about an array.so there needs to be a array to execute ,thats why we are calling data.users.
        if (Array.isArray(data.users)) {
          setUsers(data.users); //setting the users array to the data object
        } else {
          console.error('Data is not an array:', data); // checking if it is a array
        }
      })
      .catch(error => console.error('Error fetching data:', error)); // provides a error message if fetching is failed
  }, []); 

  return (
    <div className="body-content">
      <h2>Users Details</h2>
      
      <table>   
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
    {users.map(user => (
    <tr key={user.id} className={user.gender == 'male' ? 'male' : 'female'}> 
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.gender}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

export default Body;
