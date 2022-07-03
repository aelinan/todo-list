import React from "react";
import "./TodoSearch.css";

function TodoSearch ({ searchValue, setSearchValue, loading }) {
    
    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    }
    return [
        <input 
        className="TodoSearch" 
        placeholder="Tarea" 
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
        key='23'
        />,
    ]
}

export { TodoSearch }