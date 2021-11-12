import React from 'react';
import CustomRow from "../customrow/custom-row";

const TodoList = ({className, ...props}) => {

    return (
        <div>
            <table>
                <thead className={className}>
                <tr>
                    <th>Номер</th>
                    <th>Задача</th>
                    <th>Дата создания</th>
                    <th>Выполнить до</th>
                </tr>
                </thead>
                <tbody>
                {props.todoList.map((todo, index) => <CustomRow key={todo.id} todo={todo} index={index}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;