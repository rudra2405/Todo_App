import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage"
import "./App.css"
import { useState } from "react";


function App() {


  const [todoItems, setTodoItems] = useState([
    //   name: 'Buy Milk',
    //   dueDate: '05/10/2024',
    // },
    // {
    //   name: 'Go to College',
    //   dueDate: '05/10/2024',
    // }
  ]);

  const HandleNewItems = (itemName, itemDueDate) => {
    // console.log(`new Item added: ${itemName} Date: ${itemDueDate}`)
    const newtodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }]
    setTodoItems(newtodoItems);
  }

  const handleDeleteItem = (itemName) => {

    const newtodoItems = todoItems.filter((item) => item.name !== itemName)
    setTodoItems(newtodoItems);
  }

  return (
    <center className="Todo-container">
      <AppName></AppName>
      <AddTodo onNewItems={HandleNewItems}></AddTodo>
      {todoItems.length == 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  )
}

export default App
