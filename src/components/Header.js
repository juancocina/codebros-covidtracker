import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Coronavirus Tracker</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/countries/">Countries</Link>
          </li>
          <li>
            <Link to="/states/">United States</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
