import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import DisplayRepos from './components/DisplayReposComponent/DisplayReposComponent';
import Menu from './components/common/MenuComponent';
import Header from './components/common/HeaderComponent';
import RecentSearchs from './components/RecentSearchsComponent/RecentSearchsComponent';

function App() {
  return (
    <Router>
      <Menu />
      <div className="container-fluid">
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Header
                title="Home"
                description="Little app to test some of the Github api endpoints"
              />
            )}
          />
          <Route path="/recent" component={RecentSearchs} />
          <Route path="/search" component={DisplayRepos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
