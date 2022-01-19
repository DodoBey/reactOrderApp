import styles from '../Main.module.scss'
import CartIcon from './CartIcon'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.leftGrid}>
                <h1>Catch a Food</h1>
            </div>
            <button className={styles.rightGrid} onClick={props.showCart}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={styles.amount}>100</span>
            </button>
        </header>
    )
}

export default Header
