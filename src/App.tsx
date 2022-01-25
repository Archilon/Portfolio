// App.tsx
import React from 'react'
import MyFirstComponent from './sites/Front Page/myFirstComponent';
import Projects from './sites/Projects/Projects';
import AboutMe from './sites/About me/AboutMe';
import ClickCount from './components/ClickCount/clickCount';
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
      
        {/* The navigation bar and other components you want to display on all pages come here */}
        <div className={styles.navbar}>
          <Link to='/sites/Front Page'>Front page</Link>
        
          <Link to='/sites/Projects'>Current projects</Link>

          <Link to='/sites/About me'>About me</Link>
        </div>

        <Switch>
          {/* Changing content comes here */}
          <Route exact path='/sites/Front Page' component={MyFirstComponent} />
          <Route exact path='/sites/Projects' component={Projects}/>
          <Route exact path='/sites/About me' component={AboutMe}/>
        </Switch>
  
        {/* The footer and other components you want to display on all pages come here */}
        <ClickCount />
  
      </Router>          
            )
}

export default App
