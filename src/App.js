import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Symbols from './Components/Symbols/Symbols'


const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Symbols} />
        </Switch>
    )
}

export default App
