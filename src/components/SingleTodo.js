// import React from 'react'
import { useDispatch } from 'react-redux'
import { deletedataRedux } from '../redux/action/todoAction'
export default function SingleTodo({todo,i}) {
    const dispatch = useDispatch()
    const deleteHandler = (id) => {
        dispatch(deletedataRedux(id))
    }
    return (
        <div className="todo">
        <li className='todo-item'>{todo.text}   </li>   
        <button className='complete-btn' onClick={()=>deleteHandler(todo.uid)} > <i className="fas fa-trash"></i></button>        
                  
        </div>
    )
}
            