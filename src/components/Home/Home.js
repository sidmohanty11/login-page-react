import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>RULE OF HOOKS!!!!!</h1>
      <h2>1.Only call React hooks in React funcs - 1. React component funcs or 2. Custom hooks</h2>
      <h2>2. Only call react hooks at the top level - 1. Don't call them in nested funcs or 2. Don't call them in any block statements</h2>
      <h2>useEffect hook - Always add everything you refer to inside of useEffect() as a dependancy!</h2>
    </Card>
  );
};

export default Home;
