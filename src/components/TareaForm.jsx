import React from "react";
import { useState } from "react";

const TareaForm = ({ agregarT }) => {

    const [input, setInput] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        agregarTarea(input);
        setInput('');
    };

    return (
        <form onSubmit={formSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Agregar Tarea...."
            />
            <button type="submit">Agregar</button>
        </form>
    );
}

export default TareaForm;