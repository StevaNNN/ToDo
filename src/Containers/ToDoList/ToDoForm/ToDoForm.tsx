import React, { FormEvent, useState } from "react";

export type PROPS = {
    addNewTodo: (text: string) => void
}
const ToDoForm = (props: PROPS) => {
    const [ value, setValue ] = useState<string>('');
    const { addNewTodo } = props;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;
        // @ts-ignore
        addNewTodo(value);
        setValue("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
    )
}

export default ToDoForm;