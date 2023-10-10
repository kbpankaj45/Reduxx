import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";



function Todos() {  
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Todos</h1>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <h3>{todo.text}</h3>
                    <button onClick={() => dispatch(removeTodo(
                        todo.id
                    ))}>Delete</button>
                </li>
            ))}
        </div>
    );
    }
export default Todos;
