import React from "react";

function TodoHeader({ children, loading }) {

    // return (
    //     <header>
    //         {React.Children
    //             .toArray(children)
    //             .map(child => React.cloneElement(child, { loading }))}
    //     </header>
    // );
    
    return (
        <header>
            {
               [...children].map((child, index) => (React.cloneElement(child, {loading, key: index})))
            }
        </header>
    )
    
}

export { TodoHeader }