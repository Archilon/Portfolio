import React from 'react'
import styles from './Projects.module.scss'
type SecondProps = {

}

const Projects: React.FC<SecondProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <p>My curret project is a school project for making a personal game.
        <br></br> in other words a game you make yourself without the help of others.
        </p>
    </div>
  )
}

export default Projects
