import React from 'react';
import styles from './Modal.Module.css'

const Modal = ({onAdd, active, setActive, ...props}) => {
    return (
        <div className={`${styles.modal} ${active ? styles.active : ''}`} onClick={() => setActive(false)}>
            <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;