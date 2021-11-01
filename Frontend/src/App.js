import './styles/App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calendar from './pages/Calendar'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './styles/SideNavBar.css'
import Members from './pages/Members';
import Volunteers from './pages/Volunteers';

function App() {

  return (
    <div className="App">
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
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="calendar">
                <NavIcon>
                  <i className="fa fa-fw fa-calendar" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                  Calendar
                </NavText>
                  </NavItem>
                  <NavItem eventKey="members">
                <NavIcon>
                  <i className="fa fa-fw fa-members" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                  Members
                </NavText>
                  </NavItem>
                  <NavItem eventKey="to-do">
                <NavIcon>
                  <i className="fa fa-fw fa-to-do" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                  To Do
                </NavText>
                  </NavItem>
                  <NavItem eventKey="volunteers">
                <NavIcon>
                  <i className="fa fa-fw fa-volunteers" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                  Volunteers
                </NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
          <main>
            <Route path="/calendar" component={props => <Calendar />} />
            <Route path="/members" component={props => <Members />} />
            <Route path="/to-do" component={props => <Calendar />} />
            <Route path="/volunteers" component={props => <Volunteers />} />
          </main>
        </React.Fragment>
      )}
      />
      </Router>
      </div>
  );
}

export default App;
