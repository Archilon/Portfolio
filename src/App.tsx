// App.tsx
import React from 'react'
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';
import ClickCount from './components/ClickCount/clickCount';
///<ClickCount />
const App: React.FC = () => {
    return (
        <div>
            <MyFirstComponent />
        </div>
        <div>
            <SomeExampleComponent />
        </div>
    )
}

export default App
