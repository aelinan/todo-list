import React from "react";

function TodoList (props) {

    const renderFunc = props.children || props.render;

    return (
        <section className="sectionList">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onTodoCreate()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {props.searchedTodos.map(renderFunc)}

            <ul>
                {props.children}
            </ul>
        </section>
        
    );
}

export { TodoList }