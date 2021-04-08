import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Header = ({ state, colour }) => {
  return (
    <HeaderWrapper>
      <Link link="/" children="Home" />
      <Link link="/about" children="About" />
    </HeaderWrapper>
  );
};

export default connect(Header);

const HeaderWrapper = styled.header`
  height: 100vh;
  background-color: red;
  width: 100%;
`;
