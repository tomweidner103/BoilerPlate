import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter, withRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import UserPage from './components/UserPage'
import Loggin from './components/Loggin'
import { getMe } from './reducers/userReducer';

const Main = withRouter(class extends Component {
  async componentDidMount () {
    await store.dispatch(getMe())
    this.props.history.push('/home')
  }

  render() {
    return (
      <Switch>
        <Route path='/home' component={UserPage} />
        <Route component={Loggin} />
      </Switch>
    )
  }
})

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);
