import React, { MouseEventHandler } from "react";

export type TODO_ITEM_PROPS = {
    isCompleted: boolean,
    completeTodo: MouseEventHandler<HTMLButtonElement> | undefined,
    deleteTodo: MouseEventHandler<HTMLButtonElement> | undefined,
    text: string
}

const ToDoItem = (props: TODO_ITEM_PROPS) => {
    const {
        isCompleted,
        completeTodo,
        deleteTodo,
        text
    } = props;

    return(
        <li>
            <span style={{ textDecoration: isCompleted ? 'line-through': 'none'}}>{text}</span>
            <button onClick={deleteTodo}>Delete</button>
            <button onClick={completeTodo}>Complete</button>
        </li>
    )
}
export default ToDoItem;
