import React from "react";

function TodoList (props) {
    return (
        <section className="sectionList">
            <ul>
                {props.children}
            </ul>
        </section>
        
    );
}

export { TodoList }