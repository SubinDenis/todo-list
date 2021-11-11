import React, {useState} from 'react';

const AddTodo = ({onAdd}) => {

    const emptyTodo = {
        id: 0,
        title: '',
        description: '',
        createdAt: '',
        deadlineAt: '',
        finishedAt: '',
        updatedAt: ''
    }

    const [todo, setTodo] = useState({...emptyTodo});

    const createTodo = (e) => {
        e.preventDefault();
        let newTodo = {...todo};
        newTodo.updatedAt = newTodo.createdAt;
        newTodo.id = new Date();
        onAdd(newTodo);
        setTodo({...emptyTodo})
    }


    return (
            <form>
                <div>
                    <strong>Название: </strong>
                    <input
                        onChange={(e) => setTodo({...todo, title: e.target.value})}
                        value={todo.title}
                        type={"text"}
                        placeholder={"имя задачи"}/>
                </div>
                <div>
                    <strong>Описание: </strong>
                    <input
                        onChange={(e) => setTodo({...todo, description: e.target.value})}
                        value={todo.description}
                        type={"text"}
                        placeholder={"описание задачи"}/>
                </div>
                <div>
                    <strong>дата создания: </strong>
                    <input
                        onChange={(e) => setTodo({...todo, createdAt: e.target.value})}
                        value={todo.createdAt}
                        type={"text"}
                        placeholder={"строка"}/>
                </div>
                <div>
                    <strong>выполнить до даты: </strong>
                    <input
                        onChange={(e) => setTodo({...todo, deadlineAt: e.target.value})}
                        value={todo.deadlineAt}
                        type={"text"}
                        placeholder={"строка"}/>
                </div>
                <button onClick={createTodo}>Добавить</button>
            </form>
    );
};

export default AddTodo;