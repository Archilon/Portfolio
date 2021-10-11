// App.tsx
import React from 'react'
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';
import ClickCount from './components/ClickCount/clickCount';

const App: React.FC = () => {
    return (
        <div>
            <MyFirstComponent />
            <ClickCount />
            <SomeExampleComponent />
        </div>
    )
}

export default App