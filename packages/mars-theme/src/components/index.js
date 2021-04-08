import React from "react";
import Header from "./header/header";
// import Footer from "./footer/footer";
import globalStyle from "./globalStyle";
import swiperStyle from "../assets/css/swiper";
import { connect, Global, styled } from "frontity";
// import { useTransition, animated } from "react-spring";
import Switch from "@frontity/components/switch";
import Layout from "./layout/layout";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global styles={globalStyle} />
      {data.isHome && <Global styles={swiperStyle} />}
      <Main>
        <Header />
        <Switch>
          <Layout when={data.isPage} />
          <div when={data.isArchive}>This is a list</div>
          <div when={data.isPost}>This is a post</div>
          <div when={data.is404}>Not found</div>
        </Switch>
        <Header />
      </Main>
    </>
  );
};

export default connect(Root);

const Main = styled.main``;
