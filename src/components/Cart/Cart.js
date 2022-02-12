import Modal from '../UI/Modal'
import styles from '../Main.module.scss'
import { useCallback, useContext, useState } from 'react'
import CartContext from '../../store/cartContext'
import Checkout from './Checkout'

const Cart = (props) => {
    const [isVisible, setIsVisible] = useState(false)
    const [orderSubmitting, setOrderSubmitting] = useState(false)
    const [orderConfirmed, setOrderConfirmed] = useState(false)

    const ctx = useContext(CartContext)

    const cartItemAddHandler = (item) => {
        ctx.addItem({ ...item, amount: 1 })
    }

    const cartItemRemoveHandler = (id) => {
        ctx.deleteItem(id)
    }

    const orderHandler = () => {
        setIsVisible(true)
    }

    const sendOrder = async (orderDetails) => {
        const response = await fetch('https://testproject-d9d95-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify(orderDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
    }

    const submitOrderHandler = (userData) => {
        const orderDetails = {
            name: userData.name,
            address: `${userData.street} ${userData.postalCode} ${userData.city}`,
            items: ctx.items
        }
        setOrderSubmitting(true)
        sendOrder(orderDetails)
        setOrderSubmitting(false)
        setOrderConfirmed(true)
        ctx.clearCart()
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

    const cartContent = <>
        {cartItems}
        <div className={styles.cartAmount}>
            <span>Total Amount</span>
            <span>${ctx.totalAmount.toFixed(2)}</span>
        </div>
        {isVisible && <Checkout onConfirm={submitOrderHandler} onCancel={props.hideCart} />}
        {!isVisible && <div className={styles.cartButtons}>
            <button onClick={props.hideCart}>Close</button>
            {ctx.items.length > 0 && <button onClick={orderHandler}>Order</button>}
        </div>}
    </>

    const isOrderSubmitting = <p style={{ fontSize: '30px' }}>Order is proccessing...</p>
    const isOrderConfirmed = <>
        <p style={{ fontSize: '30px' }}>Your order is confirmed. Enjoy!</p>
        <div className={styles.cartButtons}>
            <button onClick={props.hideCart}>Close</button>
        </div>
    </>

    return (
        <Modal hideCart={props.hideCart}>
            {!orderSubmitting && !orderConfirmed && cartContent}
            {orderSubmitting && isOrderSubmitting}
            {!orderSubmitting && orderConfirmed && isOrderConfirmed}
        </Modal>
    )
}

export default Cart
