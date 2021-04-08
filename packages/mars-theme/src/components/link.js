import React from "react";
import { connect, styled } from "frontity";

const Link = ({
  actions,
  link,
  className,
  children,
  "aria-current": ariaCurrent,
  colour
}) => {
  const onClick = (event) => {
    if (link.startsWith("http")) return;
    event.preventDefault();
    actions.router.set(link);
    window.scrollTo(0, 0);
  };

  return (
    <LinkItem
      href={link}
      onClick={onClick}
      className={className}
      aria-current={ariaCurrent}
      colour={colour}
    >
      {children}
    </LinkItem>
  );
};

export default connect(Link);

const LinkItem = styled.a`
  color: ${(props) => props.colour};
`;
