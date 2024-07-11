import { useState } from 'react';

function AddTodo({ onNewItems }) {

  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  }

  const handleAddButton = () => {
    onNewItems(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  }

  return (
    <div className="container text-center">
      <div className="row Rudra-row">
        <div className="col-6">
          <input type="text" value={todoName} placeholder="Enter Text here" onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success Rudra-btn" onClick={handleAddButton}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo