import useInput from '../hooks/use-input'
import styles from '../Main.module.scss'

const Checkout = (props) => {
    const condition = value => value.trim() !== ''

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(condition)

    const {
        value: enteredStreet,
        isValid: enteredStreetIsValid,
        hasError: streetHasError,
        valueChangeHandler: streetChangedHandler,
        inputBlurHandler: streetBlurHandler,
        reset: resetStreetInput
    } = useInput(condition)

    const {
        value: enteredPostal,
        isValid: enteredPostaIsValid,
        hasError: postalHasError,
        valueChangeHandler: postalChangedHandler,
        inputBlurHandler: postalBlurHandler,
        reset: resetPostalInput
    } = useInput(condition)

    const {
        value: enteredCity,
        isValid: enteredCityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangedHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCityInput
    } = useInput(condition)

    let formIsValid = false

    if (enteredNameIsValid && enteredStreetIsValid && enteredPostaIsValid && enteredCityIsValid) {
        formIsValid = true
    }

    const confirmOrder = event => {
        event.preventDefault()

        if (!formIsValid) {
            return
        }

        props.onConfirm(
            {
                name: enteredName,
                street: enteredStreet,
                postalCode: enteredPostal,
                city: enteredCity
            }
        )

        resetNameInput()
        resetStreetInput()
        resetPostalInput()
        resetCityInput()
    }

    const nameClass = nameInputHasError ? styles.invalid : ''
    const streetClass = streetHasError ? styles.invalid : ''
    const postalClass = postalHasError ? styles.invalid : ''
    const cityClass = cityHasError ? styles.invalid : ''

    return (
        <form onSubmit={confirmOrder} className={styles.orderForm}>
            <div className={`${styles.inputs} ${nameClass}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' value={enteredName} onBlur={nameBlurHandler} onChange={nameChangedHandler} />
                {nameInputHasError && <p>Name cannot be empty.</p>}
            </div>
            <div className={`${styles.inputs} ${streetClass}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' value={enteredStreet} onBlur={streetBlurHandler} onChange={streetChangedHandler} />
                {streetHasError && <p>Street cannot be empty.</p>}
            </div>
            <div className={`${styles.inputs} ${postalClass}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' value={enteredPostal} onBlur={postalBlurHandler} onChange={postalChangedHandler} />
                {postalHasError && <p>Postal cannot be empty.</p>}
            </div>
            <div className={`${styles.inputs} ${cityClass}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' value={enteredCity} onBlur={cityBlurHandler} onChange={cityChangedHandler} />
                {cityHasError && <p>City cannot be empty.</p>}
            </div>
            <div className={styles.buttons}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button disabled={!formIsValid}>Confirm</button>
            </div>
        </form>
    )
}

export default Checkout