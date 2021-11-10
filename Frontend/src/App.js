import './styles/App.css';
<<<<<<< HEAD
import Login from './components/Login.js'
=======
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CalendarPage from './pages/Calendar'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './styles/NavBar.css'
import Members from './pages/Members';
import NewMember from './pages/NewMember';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
>>>>>>> 335faaae1b08654d4de5f9523943017eacb9ebc4

function App() {

  return (
    <div className="App">
<<<<<<< HEAD
      Begin inserting your code here!
      <Login></Login>
    </div>
=======
      <Router>
      <Route render={({ location, history }) => (
        <React.Fragment>
          <SideNav
            onSelect={(selected) => {
              const to = '/' + selected;
              if (location.pathname !== to) {
                history.push(to);
              }
              }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="calendar">
              <NavItem eventKey="calendar">
                <NavIcon>
                  <i className="fa fa-fw fa-calendar" style={{ fontSize: '1.75em', color: '#EFCE66' }}>
                    <DateRangeIcon />
                  </i>
                </NavIcon>
                <NavText>
                  Calendar
                </NavText>
                  </NavItem>
                  <NavItem eventKey="members">
                <NavIcon>
                  <i className="fa fa-fw fa-members" style={{ fontSize: '1.75em', color: '#EFCE66' }}>
                    <PersonIcon />
                  </i>
                </NavIcon>
                <NavText>
                  Members
                </NavText>
                  </NavItem>
                  <NavItem eventKey="newmember">
                <NavIcon>
                  <i className="fa fa-fw fa-to-do" style={{ fontSize: '1.75em', color: '#EFCE66' }}>
                    <CreateIcon />
                  </i>  
                </NavIcon>
                <NavText>
                  New Member
                </NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
          <main>
            <Route path="/calendar" component={props => <CalendarPage />} />
            <Route path="/members" component={props => <Members />} />
            <Route path="/newmember" component={props => <NewMember />} />
          </main>
        </React.Fragment>
      )}
      />
      </Router>
      </div>
>>>>>>> 335faaae1b08654d4de5f9523943017eacb9ebc4
  );
}

export default App;
