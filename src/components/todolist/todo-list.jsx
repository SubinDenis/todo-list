import React from 'react';
import CustomRow from "../customrow/custom-row";

const TodoList = ({todoList, onEdit, onDelete}) => {

    if (todoList.length === 0) {
        return (
            <strong>List is empty!</strong>
        );
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Номер</th>
                    <th>Задача</th>
                    <th>Дата создания</th>
                    <th>Выполнить до</th>
                    <th/>
                    <th/>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {todoList.map((todo, index) => <CustomRow onEdit={onEdit} key={todo.id} todo={todo} index={index} onDelete={onDelete}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;