import Modal from '../UI/Modal'
import styles from '../Main.module.scss'

const Cart = (props) => {
    const cartItems = (
        <ul className={styles.cartItems}>{[{ id: 'm1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => <li key={item.id} className={styles.cartItem}>{item.name}</li>)}</ul>)

    return (
        <Modal hideCart={props.hideCart}>
            {cartItems}
            <div className={styles.cartAmount}>
                <span>Total Amount</span>
                <span>$35.98</span>
            </div>
            <div className={styles.cartButtons}>
                <button onClick={props.hideCart}>Close</button>
                <button>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
