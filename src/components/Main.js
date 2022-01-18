import React from 'react'
import Cart from './Cart/Cart'
import Header from './Header/Header'
import styles from './Main.module.scss'
import Banner from './UI/Banner'
import MealList from './UI/MealList'

const Main = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Banner />
                <MealList />
                <Cart />
            </main>
        </>
    )
}

export default Main
