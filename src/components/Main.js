import React, { useState } from 'react'
import AllMeals from './AllMeals'
import Cart from './Cart/Cart'
import Header from './Header/Header'
import styles from './Main.module.scss'
import Banner from './UI/Banner'
import MealList from './UI/MealList'

const Main = () => {

    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true)
    }

    const hideCartHandler = () => {
        setShowCart(false)
    }

    return (
        <>
            <Header showCart={showCartHandler} />
            <main className={styles.main}>
                <Banner />
                <AllMeals />
                {showCart && <Cart hideCart={hideCartHandler} />}
            </main>
        </>
    )
}

export default Main
