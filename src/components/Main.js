import React from 'react'
import Header from './Header/Header'
import styles from './Main.module.scss'
import Banner from './UI/Banner'
import MealList from './UI/MealList'

const Main = () => {
    return (
        <div className={styles.main}>
            <Header />
            <Banner />
            <MealList />
        </div>
    )
}

export default Main
