
// @flow

import React from 'react';
import { Flex, Box } from 'rebass';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Navigation } from './components/Navigation';
import { RecentLaunches } from './components/RecentLaunches';
import { LaunchDetails } from './components/LaunchDetails';

function App() {
  return (
    <Router>
      <Navigation />
      <Flex mt={30}>
        <Box
          sx={{
            width: '100%',
            maxWidth: 1280,
            mx: 'auto',
            px: 3,
          }}>
          <Switch>
            <Route path="/" exact>
              <RecentLaunches />
            </Route>
            <Route path="/launch/:id">
              <LaunchDetails />
            </Route>
          </Switch>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
