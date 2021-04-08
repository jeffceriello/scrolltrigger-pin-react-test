import { css } from "frontity";

const styleWithFont = css`
  * {
    box-sizing: border-box;
  }
  :root {
    --colour-black-01: #000000;
    --colour-white-01: #ffffff;
    --colour-green-01: #2ec4b6;
    --colour-blue-01: #133c55;
    --colour-grey-01: #737373;
    --break-small: 768px;
  }
  html,
  main {
    width: 100%;
    height: 100%;
  }
  body {
    cursor: default;
    margin: 0;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  figure {
    margin: 0;
  }
  img {
    max-width: 100%;
  }
  h1,
  h2,
  h3 {
    margin: 0;
  }
  h2 {
    font-size: 1.625rem;
    line-height: 2.06rem;
    margin-bottom: 30px;
    @media (min-width: 768px) {
      font-size: 3.875rem;
      line-height: 4.5rem;
    }
  }
  h3 {
    font-size: 1.625rem;
    line-height: 2.06rem;
    margin-bottom: 30px;
    @media (min-width: 768px) {
      font-size: 3rem;
      line-height: 3.75rem;
    }
  }

  .hero-content p {
    margin-bottom: 0;
  }
  .arrow-green {
    background-color: var(--colour-green-01);
  }
  .arrow-white {
    background-color: var(--colour-white-01);
  }
  .menu--nav-item {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: currentcolor;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
    }
    &:hover,
    &[aria-current="page"] {
      &:before {
        width: 100%;
      }
    }
  }
  .square-element {
    height: 100%;
    max-height: 80vh;
    &:before {
      content: "";
      width: 0;
      white-space: normal;
      display: inline-block;
      vertical-align: middle;
      max-width: 100%;
      padding-top: 100%;
    }
  }
  .footer--nav-wrapper {
    .menu--nav-item {
      &:before {
        background-color: var(--colour-white-01);
      }
    }
  }
  .swiper-container {
    height: 100%;
  }
`;

export default styleWithFont;
