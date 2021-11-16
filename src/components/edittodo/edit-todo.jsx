import React, {useState} from 'react';

const EditTodo = ({todo, onEdit, onCancel, index}) => {

    const [editedTodo, setEditedTodo] = useState({...todo});

    const reloadForm = (e) => {
        e.preventDefault();
        setEditedTodo({...todo});
        onCancel();
    }

    const saveChanges = (e) => {
        e.preventDefault();
        onEdit(editedTodo, index);
    }

    return (
        <form>
            <div>
                <strong>ID: </strong>
                <input type={"text"} disabled value={editedTodo.id}/>
            </div>

            <div>
                <strong>Title: </strong>
                <input type={"text"} value={editedTodo.title} onChange={(e) => setEditedTodo({...editedTodo, title: e.target.value})}/>
            </div>

            <div>
                <strong>Description: </strong>
                <input type={"text"} value={editedTodo.description} onChange={(e) => setEditedTodo({...editedTodo, description: e.target.value})}/>
            </div>

            <div>
                <strong>Deadline at: </strong>
                <input type={"text"} value={editedTodo.deadlineAt} onChange={(e) => setEditedTodo({...editedTodo, deadlineAt: e.target.value})}/>
            </div>

            <button onClick={(e) => saveChanges(e)}>OK</button>
            <button onClick={(e) => reloadForm(e)}>Cancel</button>

        </form>
    );
};

export default EditTodo;