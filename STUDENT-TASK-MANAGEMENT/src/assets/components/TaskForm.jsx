import { useState } from "react";

function TaskForm({ addTask }) {
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [priority, setPriority] = useState("Medium");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === "" || subject.trim() === "") {
            alert("Please enter task and subject");
            return;
        }

        const newTask = {
            id: Date.now(),
            title: title,
            subject: subject,
            priority: priority,
            completed: false
        };

        addTask(newTask);

        setTitle("");
        setSubject("");
        setPriority("Medium");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>

            <button type="submit">
                Add Task
            </button>

        </form>
    );
}

export default TaskForm;