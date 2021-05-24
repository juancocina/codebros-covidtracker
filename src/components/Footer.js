import React from 'react';
import { Link } from 'gatsby';
import { GithubOcticons, GoMarkGithub } from 'react-icons/go';

import Container from "components/Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Link to="https://github.com/juancocina/CPSC349-Codebros-project2"><p>&copy; { new Date().getFullYear() } Codebros <GoMarkGithub></GoMarkGithub></p></Link>
      </Container>
    </footer>
  );
};

export default Footer;
