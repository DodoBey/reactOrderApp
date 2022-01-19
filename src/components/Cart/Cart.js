import Modal from '../UI/Modal'
import styles from '../Main.module.scss'
import { useContext } from 'react'
import CartContext from '../../store/cartContext'

const Cart = (props) => {

    const ctx = useContext(CartContext)

    console.log(ctx)

    const cartItems = (
        <ul className={styles.cartItems}>{ctx.items.map((item) => <li key={item.id} className={styles.cartItem}>{item.name}</li>)}</ul>)

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
