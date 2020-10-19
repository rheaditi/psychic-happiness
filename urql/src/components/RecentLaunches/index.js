import React from 'react';
import { Heading } from 'rebass';

import {
  Link,
} from "react-router-dom";

export const RecentLaunches = () => {
  return <div>
    <Heading
      fontSize={5}
      color='primary'>
      Recent Launches
    </Heading>
    [[list of recent launches]]
    <ul>
      <li><Link to="/launch/23">23</Link></li>
      <li><Link to="/launch/46">46</Link></li>
    </ul>
  </div>;
};
