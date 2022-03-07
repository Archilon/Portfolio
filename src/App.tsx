// App.tsx
import React, { useEffect } from 'react'
import Main from './sites/Front_Page/Main';
import Projects from './sites/Projects/Projects';
import AboutMe from './sites/About_me/AboutMe';
import Feedback from './sites/Feedback/Feedback';
import styles from './App.module.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom';
import Statistics from './sites/Feedback/statistics';
import FirebaseServices from './firebase/firebaseServices';
import { logEvent } from 'firebase/analytics';


const App: React.FC = () => {
  useEffect( () => {
    console.log('analyticsUseEffect')
    const analyticsInstance = FirebaseServices.getAnalyticsInstance();
    logEvent(analyticsInstance, 'page_view', {
      page_path: '/'
    })
  })

    return (
      <Router basename='/reactportfolio'>
        <div className={styles.wrapper}>
          <div className={styles.content}>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/Projects' component={Projects}/>
            <Route exact path='/About_me' component={AboutMe}/>
          </Switch>
          </div>
        </div>
        <div className={styles.sidebar}>
            <Link to='/'><button>Front page</button></Link>
            <Link to='/Projects'><button>Projects</button></Link>
            <Link to='/About_me'><button>About me</button></Link>
            <div className={styles.Feedback}><Feedback /></div>
        </div>
        <Statistics />
        
      </Router>

      
            )
}

export default App
