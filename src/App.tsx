// App.tsx
import React, { useEffect } from 'react'
import Main from './sites/Front_Page/Main';
import Projects from './sites/Projects/Projects';
import AboutMe from './sites/About_me/AboutMe';
import Feedback from './sites/Feedback/Feedback';
import styles from './App.module.scss'
import {
    Switch,
    Route,
    Link,
    useHistory,
  } from 'react-router-dom';
import FirebaseServices from './firebase/firebaseServices';
import { logEvent } from 'firebase/analytics';


const App: React.FC = () => {

  const history = useHistory();

  useEffect(() => {
    const pingAnalytics = () => {
      console.log('pingAnalytics:', window.location.pathname);
      const analyticsInstance = FirebaseServices.getAnalyticsInstance();
      logEvent(analyticsInstance, 'page_view', {
        page_path: window.location.pathname,
      });
    };

    pingAnalytics();
    console.log('USEEFFECT => LOCATION');

    return history.listen(location => {
      console.log('location', location);
      pingAnalytics();
    })
  }, [history]);

    return (
      <>
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
        </>

      
            )
}

export default App
