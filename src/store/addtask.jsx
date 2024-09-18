import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from './slice';

export default function Addtask() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault(); // Fixed the typo here
        if (task.trim()) { // Ensure task is not empty
            dispatch(addtodo(task));
            console.log(task);
            setTask(''); // Clear the input after submission
        }
    };

    return (
        <form onSubmit={submit}> {/* Add a form element to handle the submit event */}
            <input 
                placeholder='ADD TASK' 
                type='text' 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
            />
            <button type="submit">Add</button> {/* Ensure button type is submit */}
        </form>
    );
}
