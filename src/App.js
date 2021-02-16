import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './Home';
import CheckOut from './CheckOut';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
                <Route path="/checkout/">
                {/* /checkout/:anything/page */}
                <Header/>
                <CheckOut/>
                <h1>CheckOut</h1>
                </Route>
                <Route path="/login">
                  <h1>Login Page</h1>
                </Route>
                <Route path="/">
                    <Header />
                    <HomePage/>
                </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
