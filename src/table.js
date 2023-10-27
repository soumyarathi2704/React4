import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './table.css';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        console.log('API Response:', response.data);
        if (Array.isArray(response.data)) {
          console.log('Data is an array');
          setUsers(response.data);
        } else {
          console.error('API response is not an array:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  

  return (
    <div className="UserTable">
      <h2>User Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;