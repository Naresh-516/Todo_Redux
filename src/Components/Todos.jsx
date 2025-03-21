import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, delTodo } from './Actions';

function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    return (
        <div className="max-w-xl mx-auto my-8 p-4 flex justify-center items-center">
            <ul className="space-y-4">
                {todos.map((todo) => {
                    return (
                        <li
                            key={todo.id}
                            className={`flex justify-between items-center p-4 bg-white rounded-lg shadow-md ${
                                todo.completed ? 'bg-gray-200' : 'bg-white'
                            }`}
                        >
                            <span
                                className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}
                            >
                                {todo.text}
                            </span>
                            <div className="space-x-2">
                                <button
                                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                                    onClick={() => dispatch(toggleTodo(todo.id))}
                                >
                                    {todo.completed ? 'Undo' : 'Complete'}
                                </button>
                                <button
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                    onClick={() => dispatch(delTodo(todo.id))}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Todos;
