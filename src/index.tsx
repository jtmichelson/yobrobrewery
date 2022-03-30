import React from 'react'
import ReactDOM from 'react-dom'
import Header from './layout/Header'
import * as serviceWorker from './serviceWorker'

import App from './App'
import SubMenu1Page from './pages/SubMenu1Page'
import SubMenu2Page from './pages/SubMenu2Page'
import NotFoundPage from './pages/NotFoundPage'

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

// redux toolkit
import { Provider } from 'react-redux'
import store from './redux/store'
import { setUser } from './features/authentication/authenticationSlice'

store.subscribe(() => {
    console.log('Redux toolkit state: ' + store.getState())
})
store.dispatch(setUser(store.getState()))


const routing = (
    <Router>
        <Provider store={store}>
            <Header user={store.getState().authentication.user} />
            <div className="page">
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/Articles" component={SubMenu1Page} />
                    <Route exact path="/Articles/DependencyInjectionIntro" component={SubMenu1Page} />
                    <Route exact path="/SubMenu2" component={SubMenu2Page} />
                    <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
                </Switch>
            </div>
        </Provider>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister()
