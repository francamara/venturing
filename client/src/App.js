import NewMovie from './pages/NewMovie'
import MovieList from './pages/MovieList'
// import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
// import { Router } from 'express'

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" style={{ margin: 13 }}>
            Get all movies
          </Button>
        </Link>
        <Link to="/NewMovie" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="secondary" style={{ margin: 13 }}>
            post new movie
          </Button>
        </Link>

        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/NewMovie" exact>
            <NewMovie />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

{
  /* <Header />

<NewMovie/> */
}
