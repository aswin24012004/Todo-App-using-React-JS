import React from 'react';
import './todo.css';

function UserList({users,onDelete, onEdit}) {
  return (
    <div>
        <h2>UserList</h2>
        {
            users.length === 0 ? (
                <p>No Users Found</p>
            ) : (
                <ul>
                    {
                        users.map((user) => (
                            <li key={user.id}>
                                <strong>{user.name}</strong> - {user.email}
                                <button onClick={()=>onEdit(user)}>Update</button>
                                <button onClick={() =>onDelete(user)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}

export default UserList;