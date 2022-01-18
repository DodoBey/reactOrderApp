import BgImg from "../../img/banner.jpg"
import styles from '../Main.module.scss'

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <h1>Delicious Foods, One Click Away!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>
    )
}

export default Banner
