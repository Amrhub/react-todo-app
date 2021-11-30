import { PropTypes } from 'prop-types';
import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import SinglePage from './SinglePage';

const About = ({ pushContent }) => {
  const { url, path } = useRouteMatch();
  return (
    <div
      className={
        pushContent ? 'about__content about__content--pushed' : 'about__content'
      }
    >
      <ul className="about__list">
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  );
};

About.propTypes = {
  pushContent: PropTypes.bool.isRequired,
};

export default About;
