import { useState, useEffect } from 'react';
import './todo.css';


export default function UserForm({ onSubmit, editUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (editUser) {
            setName(editUser.name);
            setEmail(editUser.email);
        } else {
            setName('');
            setEmail('');
        }
    }, [editUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) return;
        onSubmit({ name, email });
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{editUser ? "Update User" : "Add User"}</h2>
            <input
                type="text"
                placeholder="Enter the Name.."
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> <br />
            <input
                type="email"
                placeholder="Enter the Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /> <br />
            <button type="submit">{editUser ? "Update" : "ADD"}</button>
        </form>
    );
}
