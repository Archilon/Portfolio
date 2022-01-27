// App.tsx
import React from 'react'
import Main from './sites/Front_Page/Main';
import Projects from './sites/Projects/Projects';
import AboutMe from './sites/About_me/AboutMe';
import Feedback from './sites/Feedback/Feedback';
import styles from './App.module.scss'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';


const App: React.FC = () => {
    return (
      <Router basename='/reactportfolio'>
        <div className={styles.wrapper}>
          <div className={styles.content}>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/sites/Projects' component={Projects}/>
            <Route exact path='/sites/About_me' component={AboutMe}/>
          </Switch>
          </div>
        </div>
        <div className={styles.sidebar}>
            <Link to='/'><button>Front page</button></Link>
            <Link to='/sites/Projects'><button>Projects</button></Link>
            <Link to='/sites/About_me'><button>About me</button></Link>
        </div>
        <div className='Footer'><Feedback /></div>
      </Router>

      
            )
}

export default App
