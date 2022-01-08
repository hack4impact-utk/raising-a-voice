import './styles/App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CalendarPage from './pages/Calendar'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './styles/NavBar.css'
import Members from './pages/Members';
import NewMember from './pages/NewMember';
import ProfileSearch from './pages/MemberSearch';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import SearchIcon from '@mui/icons-material/Search';


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
              <NavItem eventKey="profilesearch">
                <NavIcon>
                  <i className="fa fa-fw fa-profilesearch" style={{ fontSize: '1.75em', color: '#EFCE66' }}>
                    <SearchIcon />
                  </i>  
                </NavIcon>
                <NavText>
                  Profile Seaerch
                </NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
          <main>
            <Route path="/calendar" component={props => <CalendarPage />} />
            <Route path="/members" component={props => <Members />} />
            <Route path="/newmember" component={props => <NewMember />} />
            <Route path="/profilesearch" component={props => <ProfileSearch />} />
          </main>
        </React.Fragment>
      )}
      />
      </Router>
      {/* <Router>
        <Switch>
          <Route exact path="/newmember" component={props => <NewMember />} />
        </Switch>
      </Router> */}
      </div>
  );
}

export default App;
