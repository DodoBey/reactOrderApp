import { useCallback, useEffect, useState } from "react"
import MealList from "./UI/MealList"

const AllMeals = () => {
    const [meals, setMeals] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchMeals = useCallback(async () => {
        try {
            const response = await fetch('https://testproject-d9d95-default-rtdb.firebaseio.com/meals.json')

            if (!response.ok) {
                throw new Error('Something Went Wrong')
            }

            const data = await response.json()

            const loadedMeals = []

            for (const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }
            setMeals(loadedMeals)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }, [])

    useEffect(() => {
        fetchMeals()
    }, [fetchMeals])

    if (isLoading) {
        return <section>
            <p style={{ textAlign: 'center', color: 'white', marginTop: '20px', fontSize: '40px' }}>Loading...</p>
        </section>
    }

    if (error) {
        return <section>
            <p style={{ textAlign: 'center', color: 'red', marginTop: '20px', fontSize: '40px' }}>{error}</p>
        </section>
    }

    const allMeals = meals.map((meal) => (
        <MealList
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ))



    return <>{allMeals}</>
}

export default AllMeals