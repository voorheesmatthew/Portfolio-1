/* global tw */
import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const Wrapper = styled.a`
  width: 100%;
  height: 5px;
  ${tw(
    "shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white"
  )};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.div`
  ${tw(
    "text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8"
  )};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const TechSym = ({ title, bg }) => (
  <Wrapper bg={bg}>
    {/* <Title>{title}</Title> */}
  </Wrapper>
);

export default TechSym;

TechSym.propTypes = {
  title: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired
};
