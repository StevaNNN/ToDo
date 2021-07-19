import React, {useState} from 'react';
import ToDoItem from "./ToDoItem/ToDoItem";
import ToDoForm from "./ToDoForm/ToDoForm";

interface TODO_INTERFACE {
    text: string;
    isCompleted: boolean;
}

const ToDoList = () => {

    const [todos, setTodos] = useState<TODO_INTERFACE[]>([]);

    const deleteTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const completeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos)
    }

    const addNewTodo = (text: string) => {
        const newTodos = [...todos];
        newTodos.push({text: text, isCompleted: false});
        setTodos(newTodos);

    };

    return (
        <>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <ToDoItem
                            text={todo.text}
                            key={index}
                            isCompleted={todo.isCompleted}
                            deleteTodo={() => deleteTodo(index)}
                            completeTodo={() => completeTodo(index)}
                        />
                    )
                })}
            </ul>
            <ToDoForm addNewTodo={addNewTodo}/>
        </>
    )
}

export default ToDoList;