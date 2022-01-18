import styles from '../Main.module.scss'
import meals from '../dummyMeals'

const MealList = () => {

    return (
        <section className={styles.mealList}>
            <ul>
                {meals.map((meal) => {
                    return (
                        <li key={meal.id} className={styles.mealItem}>
                            <div className={styles.leftGrid}>
                                <h2>{meal.name}</h2>
                                <span>{meal.description}</span>
                                <span>${meal.price.toFixed(2)}</span>
                            </div>
                            <div className={styles.rightGrid}>
                                <form>
                                    <div className={styles.amount}>
                                        <label htmlFor={meal.id}>Amount</label>
                                        <input id={meal.id} type='number' min='1' defaultValue='1' />
                                    </div>
                                    <button>+Add</button>
                                </form>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default MealList
