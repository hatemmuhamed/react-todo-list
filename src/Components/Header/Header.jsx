import styles from '../Header/Header.module.css'
import todoLogo from '../../assets/Logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState } from 'react'

export default function Header( {handleAddTask} ) {
    const [title, setTitle] = useState('')

    function handleSubmit(event) {
        event.preventDefault();

        handleAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }


    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="Todo Logo" />
            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input type="text" placeholder='Add a new task' value={title} onChange={onChangeTitle} />
                <button>
                    Create
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>

    )
}
