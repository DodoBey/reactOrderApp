import styles from '../Main.module.scss'
import meals from '../dummyMeals'
import Button from './Button'

const MealList = () => {

    return (
        <div className={styles.mealList}>
            {meals.map((meal) => {
                return (
                    <div key={meal.id} className={styles.mealItem}>
                        <div className={styles.leftGrid}>
                            <h2>{meal.name}</h2>
                            <span>{meal.description}</span>
                            <span>${meal.price}</span>
                        </div>
                        <div className={styles.rightGrid}>
                            <div className={styles.amount}>
                                <label htmlFor='amount'>Amount</label>
                                <input id='amount' type='number' value='100' />
                            </div>
                            <Button label='+Add' />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MealList
