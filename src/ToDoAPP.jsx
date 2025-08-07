import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import './todo.css';

function ToDoAPP() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const addUser = (user) => {
    if (editUser) {
      setUsers(
        users.map((u) => (u.id === editUser.id ? { ...u, ...user } : u))
      );
      setEditUser(null);
    } else {
      setUsers([...users, { id: Date.now(), ...user }]);
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const startEdit = (user) => {
    setEditUser(user);
  };
  return (
    <div>
      <h1>ToDoAPP</h1>
      <UserForm onSubmit={addUser} editUSer={editUser} />
      <UserList users={users} onDelete={deleteUser} onEdit={startEdit} />
    </div>
  );
}

export default ToDoAPP;
