import { FaTimes } from "react-icons/fa";

function Task({ task, onDelect, onToggle }) {
  return (
    <>
      <div className="task-wrapper">
        <div className="task">
          <div className="taskText">
            <div>
              <h5>{task.text}</h5>
              <div>{task.day}</div>
            </div>

            <FaTimes className="FaTimes" onClick={() => onDelect(task.id)} />
          </div>
        </div>

        <div>
          <label>
            <input onClick={() => onToggle(task.id)} type="checkbox" />
          </label>
        </div>
      </div>
    </>
  );
}

export default Task;
