import React from "react";
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoHeader} from '../TodoHeader';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from "../TodoForm";
import { TodoLoading } from '../TodoLoading';
import { TodoCreate } from "../TodoCreate";
import { TodoError } from "../TodoError";
import { onEmptySearchResults } from '../onEmptySearchResults';
import { ChangeAlert } from '../ChangeAlert';




function App() {

    const {
      error, 
      loading, 
      searchedTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal,
      totalTodos, 
      completedTodos,
      searchValue, 
      setSearchValue,
      addTodo,
      sincronizeTodos,
  } = useTodos() 

  return (
    <React.Fragment>
        <TodoHeader loading={loading}>
            <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </TodoHeader>

        <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onTodoCreate={() => <TodoCreate />}
        onEmptySearchResults={onEmptySearchResults} 
        render={todo => <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />}
        >
        </TodoList>

        {openModal && (
            <Modal>
                <TodoForm
                addTodo={addTodo}
                setOpenModal={setOpenModal}
                >
                </TodoForm>
            </Modal>
        )}

        <CreateTodoButton 
            setOpenModal={setOpenModal}
        />
        <ChangeAlert sincronize={sincronizeTodos}/>  
    </React.Fragment>
  );
}

export default App;
