import TodoItem from "./TodoItem"
import styles from "./TodoItems.module.css"


function TodoItems({ todoItems, onDeleteClick }) {

  return (
    <div className={styles.todoItemContainer}>

      {todoItems.map((items) => {
        return <TodoItem key={items} todoDate={items.dueDate} todoName={items.name} onDeleteClick={onDeleteClick} ></TodoItem>
      })}
      {/* <TodoItem todoDate={'05/07/2024'} todoName={'buy milk'}></TodoItem>
      <TodoItem todoDate={'05/07/2024'} todoName={'go to college'}></TodoItem> */}
    </div>

  )
}
export default TodoItems