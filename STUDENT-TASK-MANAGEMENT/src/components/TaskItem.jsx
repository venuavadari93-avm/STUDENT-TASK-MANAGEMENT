function TaskItem({ task, toggleTask, deleteTask }) {
    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>

            <div className="task-info">

                <h3>{task.title}</h3>

                <p>Subject: {task.subject}</p>

                <span className={`priority ${task.priority.toLowerCase()}`}>
                    {task.priority}
                </span>

            </div>

            <div className="task-buttons">

                <button onClick={() => toggleTask(task.id)}>
                    {task.completed ? "Undo" : "Complete"}
                </button>

                <button onClick={() => deleteTask(task.id)}>
                    Delete
                </button>

            </div>

        </div>
    );
}

export default TaskItem;