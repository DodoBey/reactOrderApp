import { useContext } from 'react'
import CartContext from '../../store/cartContext'
import styles from '../Main.module.scss'
import CartIcon from './CartIcon'



const Header = (props) => {

    const ctx = useContext(CartContext)

    const totalItem = ctx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0);

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
                <span className={styles.amount}>{totalItem}</span>
            </button>
        </header>
    )
}

export default Header
