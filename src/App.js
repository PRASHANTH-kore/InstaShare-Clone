import {Switch, Route} from 'react-router-dom'
import LoginPage from './components/Login'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import MyProfile from './components/MyProfile'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <ProtectedRoute
      exact
      path="/"
      render={props => <Home key={Math.random()} {...props} />}
    />
    <ProtectedRoute exact path="/users/:id" component={UserProfile} />
    <ProtectedRoute exact path="/my-profile" component={MyProfile} />
    <NotFound />
  </Switch>
)

export default App
