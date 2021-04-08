import React from "react";

import swiperStyle from "../assets/css/swiper";
import { connect, Global, styled } from "frontity";
// import { useTransition, animated } from "react-spring";
import Switch from "@frontity/components/switch";
import Layout from "./layout/layout";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      {data.isHome && <Global styles={swiperStyle} />}
      <Main>
        <Switch>
          <Layout when={data.isPage} />
          <div when={data.isArchive}>This is a list</div>
          <div when={data.isPost}>This is a post</div>
          <div when={data.is404}>Not found</div>
        </Switch>
      </Main>
    </>
  );
};

export default connect(Root);

const Main = styled.main``;
