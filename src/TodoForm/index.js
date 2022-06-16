import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    const onAdd = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return (
        <form onSubmit={onAdd}>
            <label>...</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe una nueva tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button 
                type="button" 
                onClick={onCancel}
                className="TodoForm-button TodoForm-button-cancel"
                >
                    Cancelar
                </button>
                <button 
                type="submit"
                className="TodoForm-button TodoForm-button-add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }