import React from 'react'
import './App.css'
import {Provider} from 'react-redux'
import {store} from '../m2-bll/store'
import {HashRouter} from 'react-router-dom'
import {Header} from './header/Header'
import {Routing} from './routing/Routing'

export const App = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Header/>
                {/*chi*/}
                <Routing/>
            </HashRouter>
        </Provider>
    )
}
