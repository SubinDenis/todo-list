import React, {useState} from 'react';
import Modal from "../modal/modal";
import EditTodo from "../edittodo/edit-todo";

const CustomRow = ({todo, index, onEdit, onDelete}) => {

    const [active, setActive] = useState(false);
    const cancel = () => {
        setActive(false);
    }
    const save = (item, index) => {
        onEdit(item, index);
        setActive(false);
    }
    const deleteRow = (e) => {
        e.preventDefault();
        onDelete(index);
    }

    return (
        <>
            <tr>
                <td>{index}</td>
                <td>{todo.title}</td>
                <td>{todo.createdAt}</td>
                <td>{todo.deadlineAt}</td>
                <td>{todo.updatedAt}</td>
                <td>
                    <button onClick={() => setActive(true)}>EDIT</button>
                    <Modal setActive={setActive} active={active}>
                        <EditTodo index={index} todo={todo} onEdit={save} onCancel={cancel}/>
                    </Modal>

                    <button onClick={(e) => deleteRow(e)}>DELETE</button>
                </td>
            </tr>
        </>
    );
};

export default CustomRow;