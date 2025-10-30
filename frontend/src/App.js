import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        axios.get(`${API_URL}/tasks`)
            .then(response => {
                setTasks(response.data);
            });
    }, []);

    const addTask = () => {
        axios.post(`${API_URL}/tasks`, { text: taskInput })
            .then(response => {
                setTasks([...tasks, response.data]);
                setTaskInput('');
            });
    };

    const deleteTask = (id) => {
        axios.delete(`${API_URL}/tasks/${id}`)
            .then(() => {
                setTasks(tasks.filter(task => task.id !== id));
            });
    };

    return (
        <div>
            <h1>Gestionnaire de Tâches</h1>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <button onClick={addTask}>Ajouter</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => deleteTask(task.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
