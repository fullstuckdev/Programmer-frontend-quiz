import { FaPencilAlt, FaTimes } from "react-icons/fa";
import "../index.css";

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div>
      <div className="task">
        <div>
          <p className="taskName">
            <span className="textBold">Product Name</span> {task.product}
          </p>
          <p className="tasPrice">
            <span className="textBold">Product Price:</span> {task.price}
          </p>
          <p className="taskQuantity">
            <span className="textBold">Quantity:</span> {task.quantity}
          </p>
        </div>
        <div>
          <p>
            <FaTimes onClick={() => onDelete(task.id)} className="delIcon" />
          </p>
          <p>
            <FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
