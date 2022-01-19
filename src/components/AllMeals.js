import MealList from "./UI/MealList"

const Meals = [
    {
        id: 'm1',
        name: 'Pizza',
        description: 'The Italian art',
        price: 27.99,
    },
    {
        id: 'm2',
        name: 'Hamburger',
        description: 'American style, best in town',
        price: 17.99,
    },
    {
        id: 'm3',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm4',
        name: 'Ramen',
        description: 'Your bestfriend...',
        price: 12.99,
    },
    {
        id: 'm5',
        name: 'Taco Combo',
        description: 'From your Mexican Friend',
        price: 15.99,
    }
]

const AllMeals = () => {

    const allMeals = Meals.map((meal) => (
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