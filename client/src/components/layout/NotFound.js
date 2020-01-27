import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle'></i> Page Not Found
      </h1>
      <p className='large'>Sorry, this page does not exist.</p>
      <button className='btn'>
        <Link to='/'>Click Here to Go Home</Link>
      </button>
    </Fragment>
  );
};

export default NotFound;
