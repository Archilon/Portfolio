// App.tsx
import React from 'react'
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';
import ClickCount from './components/ClickCount/clickCount';
import styles from './App.module.scss'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Feedback from './sites/feedback';
///<ClickCount />
const App: React.FC = () => {
    return (
        <Router basename='/reactportfolio'>
      
        {/* The navigation bar and other components you want to display on all pages come here */}
        <div className={styles.navbar}>
          <Link to='/'>Front page</Link>
          <Link to='example'>Look my example component</Link>
          <Link to='sites'>testing third link</Link>
        </div>
  
        <Switch>
          {/* Changing content comes here */}
          <Route exact path='/' component={MyFirstComponent} />
          <Route exact path='/example' component={SomeExampleComponent}/>
          <Route exact path='/sites' component={Feedback}/>
          
        </Switch>
  
        {/* The footer and other components you want to display on all pages come here */}
        <ClickCount />
  
      </Router>          
            )
}

export default App
