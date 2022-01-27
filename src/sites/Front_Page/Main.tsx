import React from 'react'
import styles from './Main.module.scss'
type MainProps = {

}

const Main: React.FC<MainProps> = () => {

    return (
        <div className={styles.container}>
            <h1>Welcome to my porfolio</h1>
            <p>this is under development😎</p>
            <p></p>
        </div>
    )
}

export default Main;
