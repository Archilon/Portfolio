import React from 'react'
import styles from './FirstComponent.module.scss'
type MyFirstComponentProps = {

}

const MyFirstComponent: React.FC<MyFirstComponentProps> = () => {

    return (
        <div className={styles.container}>
            <h1>Hello, React!</h1>
            <p>This is my first component 😎</p>
        </div>
    )
}

export default MyFirstComponent;
