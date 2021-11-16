import React, {useState} from 'react';

const AddTodo = ({onAdd}) => {

    const [newTodo, setNewTodo] = useState({
        id: '',
        title: '',
        description: '',
        createdAt: '',
        deadlineAt: '',
        finishedAt: '',
        updatedAt: ''
    })

    const add = (e) => {
        e.preventDefault();
        let date = new Date();
        let todo = {
            ...newTodo,
            id: date.getMilliseconds(),
            createdAt: date.toLocaleString(),
            updatedAt: date.toLocaleString()
        };
        onAdd(todo);
        setNewTodo({
            id: '',
            title: '',
            description: '',
            createdAt: '',
            deadlineAt: '',
            finishedAt: '',
            updatedAt: ''
        });
    }


    return (
        <form>
            <div>
                <strong>Название: </strong>
                <input
                    onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}
                    value={newTodo.title}
                    type={"text"}
                    placeholder={"имя задачи"}/>
            </div>
            <div>
                <strong>Описание: </strong>
                <input
                    onChange={(e) => setNewTodo({...newTodo, description: e.target.value})}
                    value={newTodo.description}
                    type={"text"}
                    placeholder={"описание задачи"}/>
            </div>
            <div>
                <strong>выполнить до даты: </strong>
                <input
                    onChange={(e) => setNewTodo({...newTodo, deadlineAt: e.target.value})}
                    value={newTodo.deadlineAt}
                    type={"text"}
                    placeholder={"строка"}/>
            </div>
            <button onClick={add}>Добавить</button>
        </form>
    );
};

export default AddTodo;