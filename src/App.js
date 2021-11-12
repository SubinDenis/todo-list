import Header from "./components/header/header";
import TodoList from "./components/todolist/todo-list";
import Footer from "./components/footer/footer";
import {useState} from "react";
import AddTodo from "./components/addtodo/add-todo";
import Modal from "./components/modal/modal";
import styles from "./App.Module.css";

function App() {

    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: 'твоя первая задача',
            description: 'ты должен сделать это',
            createdAt: new Date().toLocaleString(),
            deadlineAt: new Date(2021, 11, 15).toLocaleString(),
            finishedAt: null,
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

    const [modalActivity, setModalActivity] = useState(false);


    const addTodo = (todo) => {
        setTodoList([...todoList, todo]);
        setModalActivity(false);
    }

    return (
        <div className={styles.mainWindow}>
            <Header/>
            <button onClick={() => setModalActivity(true)}>Добавить заметку</button>
            <Modal active={modalActivity} setActive={setModalActivity}>
                <AddTodo onAdd={addTodo}/>
            </Modal>
            <TodoList todoList={todoList}/>
            <Footer/>
        </div>
    );
}

export default App;
