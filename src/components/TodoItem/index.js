// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, deleteButton} = props
  const {id, title} = details

  const deleteItem = () => {
    deleteButton(id)
  }

  return (
    <li className="list-items">
      <p className="title">{title}</p>
      <button type="button" className="delete" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
