import React from 'react';
import CustomRow from "../customrow/custom-row";
import classes from "./todo-list.css"

const TodoList = (props) => {

    return (
        <div>
            <table>
                <thead className={classes.header2}>
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