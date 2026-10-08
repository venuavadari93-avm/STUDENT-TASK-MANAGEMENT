import { useEffect, useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingCount = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <div className="app">

      <header className="header">
        <h1>📚 Student Task Manager</h1>
        <p>Manage your daily learning tasks</p>
      </header>

      <div className="dashboard">

        <div className="card">
          <h2>{tasks.length}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="card">
          <h2>{pendingCount}</h2>
          <p>Pending</p>
        </div>

        <div className="card">
          <h2>{completedCount}</h2>
          <p>Completed</p>
        </div>

      </div>

      <section className="section">
        <h2>Add New Task</h2>

        <TaskForm addTask={addTask} />
      </section>

      <section className="section">
        <h2>My Tasks</h2>

        <TaskFilter
          filter={filter}
          setFilter={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </section>

    </div>
  );
}

export default App;