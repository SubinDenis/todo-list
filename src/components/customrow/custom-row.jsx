import React from 'react';

const CustomRow = ({todo, index}) => {
    return (
            <tr>
                <td>{index}</td>
                <td>{todo.title}</td>
                <td>{todo.createdAt}</td>
                <td>{todo.deadlineAt}</td>
                <td>{todo.updatedAt}</td>
            </tr>
    );
};

export default CustomRow;