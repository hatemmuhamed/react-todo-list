import styles from './Task.module.css'
import { TbTrash } from 'react-icons/tb'
import { BiEdit } from 'react-icons/bi'
import { BsFillCheckCircleFill } from 'react-icons/bs'
export default function Task({ task ,onComplete ,onDelete }) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={()=>onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill/> : <div />}
            </button>
            <p className={task.isCompleted ? styles.textCompleted :'' }>{task.title}</p>
            <button className={styles.deleteButton} onClick={()=>onDelete(task.id)}>
                <BiEdit size={20} />
                <TbTrash size={20} />
            </button>
        </div>
    )
}
