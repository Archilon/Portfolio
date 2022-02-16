import React from 'react'
import styles from './Projects.module.scss'
type SecondProps = {

}

const Projects: React.FC<SecondProps> = () => {
  return (
    
    <div className={styles.container}>
      <h1>Projects</h1>
      <p>Here is where i'll be posting current and earlier projects
        <br></br>
        </p>
        <h2>
          Earlier projects:
        </h2>
        <p>
          wolf game was a group project, collaborative with:
          
            <a href="https://github.com/MehdiZaidaneS" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.collaborators}>
              Mehdi 
            </a>
            <a 
              href="https://github.com/biki-code" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.collaborators}>
                Biki 
            </a>
            <a 
              href="https://github.com/Jebu04" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.collaborators}>
                Jesse 
            </a>

            <a 
              href="https://github.com/AmandaKankkonen"
              target="_blank" 
              rel="noreferrer" 
              className={styles.collaborators}> Amanda 
            </a>
        </p>


        <a 
          href='https://github.com/Archilon/The_Game' 
          target="_blank" 
          rel="noreferrer">
          <button>Wolf Game</button>
        </a>

        <p>
          Java Game was my first project, done with 
            <a 
              href="https://github.com/AmandaKankkonen" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.collaborators}>
                Amanda
            </a>
        </p>
        <a 
          href="https://github.com/Archilon/RPG_game.com.Main" 
          target="_blank" 
          rel="noreferrer" >
            <button>Java Game</button>
        </a>

        <p>
          My personal game is just a testing ground for different mechanics and scripts
        </p>
        <a 
          href="https://play.unity.com/mg/other/mini-dungeon" 
          target="_blank" 
          rel="noreferrer" >
            <button>Personal</button></a>
    </div>
  )
}

export default Projects
