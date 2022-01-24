import styles from '../Main.module.scss'
// import meals from '../dummyMeals'
import { useRef } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../store/cartContext'

const MealList = (props) => {
    const [isValid, setIsValid] = useState(true)


    //useRef built in method to get the amount data from input
    const amountInputRef = useRef()

    //Context hook to reach our context data
    const ctx = useContext(CartContext);


    //Our submit handler function to collect data from inputs and send it back to our context to use anywhere in our app
    const submitHandler = e => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
            setIsValid(false)
            return;
        }

        const addToCartHandler = amount => {
            ctx.addItem({
                id: props.id,
                name: props.name,
                price: props.price,
                amount: amount
            })
        }

        addToCartHandler(enteredAmountNumber)
    }

    return (
        <section className={styles.mealList}>
            <ul>
                <li key={props.id} className={styles.mealItem}>
                    <div className={styles.leftGrid}>
                        <h2>{props.name}</h2>
                        <span>{props.description}</span>
                        <span>${props.price.toFixed(2)}</span>
                    </div>
                    <div className={styles.rightGrid}>
                        <form onSubmit={submitHandler}>
                            <div className={styles.amount}>
                                <label htmlFor={props.id}>Amount</label>
                                <input ref={amountInputRef} id={props.id} type='number' min='1' defaultValue='1' />
                            </div>
                            <button>+Add</button>
                            {!isValid && <p>Please Enter A Valid Number</p>}
                        </form>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default MealList
