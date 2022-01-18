import styles from '../Main.module.scss'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div className={styles.modalBackdrop}></div>
}

const ModalOverlay = props => {
    return <div className={styles.modalMain}>
        <div className={styles.modalContent}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {

    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal
