import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import Calendar from './pages/Calendar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={HomePage} />
        </Switch>
        <Switch>
          <Route path='/calendar' exact component={Calendar} />
        </Switch>
        <Switch>
          <Route path='/profiles' exact component={ProfilePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
