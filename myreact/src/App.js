import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import promise from 'redux-promise'
import {createStore, applyMiddleware} from 'redux'
import Bear from './Bear'
import Foo  from './Foo'
import {Provider} from 'react-redux'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

class App extends Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
              <div>
                <Switch>
                   <Route path="/bear" component={Bear} />
                   <Route path="/" component={Foo} />
                </Switch>
              </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
