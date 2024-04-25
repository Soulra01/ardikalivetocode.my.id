import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css'; 
// import '../../Styles/form.css';

const Form = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  }
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    getUsers();
  }
  return (

    
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={'/addUser'} className="button is-success">Add New User</Link>
        <table className='table is-striped is-fullwidth'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td className='horizontal padding'>
                    <Link to={`/editUser/${user.id}`}className='button is-small is-info'>edit</Link>
                    <button onClick={() => deleteUser(user.id)} className='ml-2 button is-small is-danger'>delete</button>
                  </td>
                </tr>
              ))}
              
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Form
