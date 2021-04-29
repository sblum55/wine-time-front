import './App.css';
import { Route, Redirect } from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import SignUpForm from './pages/SignUp'
import LogInForm from './pages/LogIn'

function App() {
  const [user, setUser] = useState({})

  const fetchUser = () => {
    console.log();
    if (localStorage.getItem('userId')) {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/verify`, {
        headers: {
          Authorization: localStorage.getItem('userId')
        }
      })
      .then ((response) => {setUser(response.data.user)})
    }
  }
  useEffect(fetchUser, [])

  return (
    <div className="App">
      <NavBar user = {user} setUser = {setUser} />
      <Route exact path = '/'>
        <Home />
      </Route>

      <Route exact path = '/signup' render={() => {
        if (user.id) {
          return <Redirect to = '/'/>
        } else {
          return <SignUpForm setUser = {setUser} />
        }
      }} />

      <Route exact path = '/login' render={() => {
        if (user.id) {
          return <Redirect to = '/'/>
        } else {
          return <LogInForm setUser = {setUser} />
        }
      }} />
    </div>
  );
}

export default App;
