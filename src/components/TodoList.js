  
import React from 'react';
import { useDispatch } from 'react-redux';
import { cleardataRedux } from '../redux/action/todoAction';
// importing components
import SingleTodo from './SingleTodo';
function List({todos}) {
    const dispatch = useDispatch();
    const clearAllHandler = () => {
        
        dispatch(cleardataRedux())
    }

    return (
            <div className='todo-container'>
                <ul className='todo-list'>
                   { todos.map( (todo,i) => ( 
                   <SingleTodo todo={todo}  key={i} />) )}
                    <div className="todo clearAll">
        <li className='todo-item'>You have {todos.length } pending task    </li>   
        <button className='clear-btn' onClick={clearAllHandler} > Clear All</button>        
                  
        </div>
                </ul>
            </div>
        
    )
}
export default List;