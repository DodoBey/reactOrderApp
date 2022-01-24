import Modal from '../UI/Modal'
import styles from '../Main.module.scss'
import { useContext } from 'react'
import CartContext from '../../store/cartContext'

const Cart = (props) => {

    const ctx = useContext(CartContext)

    const cartItemAddHandler = (item) => {
        ctx.addItem({ ...item, amount: 1 })
    }

    const cartItemRemoveHandler = (id) => {
        ctx.deleteItem(id)
    }

    const cartItems = (
        <ul className={styles.cartItems}>{ctx.items.map((item) =>
            <li key={item.id} className={styles.cartItem}>
                <div className={styles.cartLeft}>
                    <h2 className={styles.cartTitle}>{item.name}</h2>
                    <div className={styles.cartItemInfo}>
                        <span className={styles.cartPrice}>${item.price}</span>
                        <span className={styles.cartPerAmount}>x {item.amount}</span>
                    </div>
                </div>
                <div className={styles.cartButton}>
                    <button onClick={() => cartItemRemoveHandler(item.id)}>-</button>
                    <button onClick={() => cartItemAddHandler(item)}>+</button>
                </div>
            </li>
        )}</ul>)

    return (
        <Modal hideCart={props.hideCart}>
            {cartItems}
            <div className={styles.cartAmount}>
                <span>Total Amount</span>
                <span>${ctx.totalAmount.toFixed(2)}</span>
            </div>
            <div className={styles.cartButtons}>
                <button onClick={props.hideCart}>Close</button>
                {ctx.items.length > 0 && <button>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
