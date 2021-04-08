import React from "react";
import { connect } from "frontity";
import VerticalSlider from "../verticalSlider";

const Layout = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const flexible_content = post.acf.flexible_content;
  console.log(post);

  return (
    <>
      {flexible_content &&
        flexible_content.map((content, index) => {
          if (content.acf_fc_layout === "vertical_slider")
            return <VerticalSlider key={index} content={content} data={data} />;
        })}
    </>
  );
};

export default connect(Layout);
