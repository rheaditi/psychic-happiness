import { Heading } from 'rebass';

import {
  Link,
  useParams
} from "react-router-dom";

import React from 'react'


export const LaunchDetails = () => {
  const { id } = useParams();
  return <div>
    <Link to="/">Back</Link>
    <Heading
      fontSize={5}
      color='primary'>
      LaunchDetails for {id}
    </Heading>
    [[launch details]]
    </div>;
};
