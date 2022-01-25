import React from 'react'
import styles from './AboutMe.module.scss'
type MainProps = {

}

const AboutMe: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <h1>About me</h1>
      <p>My name is Jesse, and im a student in programming.</p>
      <p>Im currently making games and learning SQL, Typescript and C#.</p>
    </div>
  )
}

export default AboutMe
