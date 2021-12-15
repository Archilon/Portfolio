import React from 'react'
import styles from '../components/example/someExampleComponent.module.scss'
type MainProps = {

}

const Feedback: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Third site!</h1>
      <p>some placeholder text here</p>
    </div>
  )
}

export default Feedback
