import Header from "./components/header/header";
import TodoList from "./components/todolist/todo-list";
import Footer from "./components/footer/footer";
import {useState} from "react";
import AddTodo from "./components/addtodo/add-todo";
import Modal from "./components/modal/modal";
import styles from "./App.Module.css";

function App() {

    const [modalActivity, setModalActivity] = useState(false);

    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: 'твоя первая задача',
            description: 'ты должен сделать это',
            createdAt: new Date().toLocaleString(),
            deadlineAt: new Date(2021, 11, 15).toLocaleString(),
            finishedAt: '',
            updatedAt: new Date().toLocaleString()
        },
        {
            id: 2,
            title: 'А это ты уже выполнил',
            description: 'Не нужно ничего делать, отдыхай',
            createdAt: new Date().toLocaleString(),
            deadlineAt: new Date(2021, 11, 15).toLocaleString(),
            finishedAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString()
        }
    ]);

    const addTodo = (i) => {
        let item = {...i};
        setTodoList([...todoList, item]);
        setModalActivity(false);
    };

    const editTodo = (newTodo, index) => {
        let todo = {...todoList[index], ...newTodo};
        let newList = todoList.slice();
        newList[index] = todo;
        setTodoList(newList);
    };

    const deleteTodo = (index) => {
        let newList = todoList.slice();
        newList.splice(index, 1)
        setTodoList(newList);
    }

    return (
        <div className={styles.mainWindow}>
            <Header/>
            <button onClick={() => setModalActivity(true)}>Добавить заметку</button>
            <TodoList todoList={todoList} onEdit={editTodo} onDelete={deleteTodo}/>
            <Footer/>
            <Modal active={modalActivity}>
                <AddTodo onAdd={addTodo}/>
            </Modal>
        </div>
    );
}

export default App;
