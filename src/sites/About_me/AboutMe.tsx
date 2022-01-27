import React from 'react'
import styles from './AboutMe.module.scss'
import Me from './media/Me.png'
type MainProps = {

}

const AboutMe: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <h1>About me</h1>
        <div className={styles.me}>
          <img src={Me} alt='Me' width="200"/>
        </div>
      <p>My name is Jesse, and im a student in programming.</p>
      <p>before programming i also studied welders profession</p>
      <p>Im currently making games and learning SQL, Typescript and C#.</p>
      <h2>Work history:</h2>
      <p>before i started studying programming i've worked in multiple different fields</p>
      <p>including:</p>
      <li>Welding</li>
      <li>construction sites as a ventilation fitter</li>
      <li>cnc-operator</li>
      <li>assembler in the metal industry</li>
    </div>
  )
}

export default AboutMe
