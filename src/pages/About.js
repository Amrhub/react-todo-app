import { PropTypes } from 'prop-types';
import React from 'react';
import { Route, NavLink, useRouteMatch } from 'react-router-dom';
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
          <NavLink to={`${url}/about-app`} activeClassName="active-subLink">
            About App
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/about-author`} activeClassName="active-subLink">
            About Author
          </NavLink>
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
