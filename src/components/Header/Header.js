import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import CartContext from '../../store/cartContext'
import styles from '../Main.module.scss'
import CartIcon from './CartIcon'



const Header = (props) => {
    const [buttonAnimated, setButtonAnimated] = useState(false)

    const ctx = useContext(CartContext)

    const { items } = ctx

    const totalItem = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0);

    const btnClasses = `${styles.rightGrid} ${buttonAnimated ? styles.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setButtonAnimated(true)
        const timer = setTimeout(() => {
            setButtonAnimated(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <header className={styles.header}>
            <div className={styles.leftGrid}>
                <h1>Catch a Food</h1>
            </div>
            <button className={btnClasses} onClick={props.showCart}>
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
