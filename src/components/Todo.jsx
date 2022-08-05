import React, { useState } from 'react'
import './todo.css'
import { addTodo, removeTodo, deleteTodo } from '../actions/index';
import { useDispatch , useSelector} from 'react-redux';
export default function Todo() {
    const [todotask, setTodotask] = useState('');
    const list = useSelector((state) => state.todoReducer.list)
    const dispatch = useDispatch();
  return (
    <div className="main-div">
        <div className="container">
            <div className="heading">
                <h2>Write you task here:</h2>
            </div>

            <div className="input-field">
                <input type="text" placeholder='enter a task'
                value={todotask}
                onChange = {(data) => setTodotask(data.target.value)}
                />
                {console.log(todotask)}
                <button className='addtodo' onClick={() => dispatch(addTodo(todotask), setTodotask(''))}>+</button>
            </div>

            <div className="all-todo">
                {list.map(element => (
                    <div className="each-todo">
                        <h2>{element.data}</h2>
                        <button className='todo-btn' onClick={() => dispatch(deleteTodo(element.id))}>X</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
