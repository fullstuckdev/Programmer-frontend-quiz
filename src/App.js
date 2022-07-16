import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

function App() {
  const [loading, setloading] = useState(true);
  const [tasks, setTasks] = useState([]); 
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 800);
  }, []);

  const getTasks = JSON.parse(localStorage.getItem("taskAdded"));

  useEffect(() => {
    if (getTasks == null) {
      setTasks([]);
    } else {
      setTasks(getTasks);
    }
    // eslint-disable-next-line
  }, []);

  const addTask = (task) => {
    const id = uuidv4();
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);

    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Produk baru telah ditambahkan!",
    });

    localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
  };

  const deleteTask = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);

    setTasks(deleteTask);

    Swal.fire({
      icon: "success",
      title: "Oops...",
      text: "Produk telah dihapus!",
    });

    localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
  };

  const editTask = (id) => {
    const product = prompt("Product Name");
    const price = prompt("Price");
    const quantity = prompt("Quantity");
    let data = JSON.parse(localStorage.getItem("taskAdded"));

    const myData = data.map((x) => {
      if (x.id === id) {
        return {
          ...x,
          product: product,
          price: price,
          quantity: quantity,
          id: uuidv4(),
        };
      }
      return x;
    });

    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Produk berhasil diedit!",
    });

    localStorage.setItem("taskAdded", JSON.stringify(myData));
    window.location.reload();
  };

  return (
    <>
      {loading ? (
        <div className="spinnerContainer">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <Header
            showForm={() => setShowAddTask(!showAddTask)}
            changeTextAndColor={showAddTask}
          />

          {showAddTask && <AddTask onSave={addTask} />}

          <h3>Jumlah produk: {tasks.length}</h3>

          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
          ) : (
            "Produk tidak ditemukan!"
          )}
        </div>
      )}
    </>
  );
}

export default App;
