import styles from './TodoItem.module.css'

function TodoItem({ todoDate, todoName, onDeleteClick }) {

  return (

    <div className="container">
      <div className={`row ${styles.rudraRow}`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className={`btn btn-danger ${styles.rudraBtn}`} onClick={() => onDeleteClick(todoName)}>Delete</button>
        </div>
      </div>
    </div>
  )
}
export default TodoItem