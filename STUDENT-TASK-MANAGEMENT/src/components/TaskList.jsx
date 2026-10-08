import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {

    if (tasks.length === 0) {
        return (
            <div className="empty">
                <h3>No tasks found</h3>
                <p>Add a new task to get started.</p>
            </div>
        );
    }

    return (
        <div className="task-list">

            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            ))}

        </div>
    );
}

export default TaskList;