import React from "react";

function onEmptySearchResults(searchText) {
    return (
        <p>No hay resultados para {searchText}</p>
    )
}
export { onEmptySearchResults }