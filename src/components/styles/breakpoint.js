import { css } from "styled-components";

export default {
  mobile: (...args) => css`
    @media (max-width: 600px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `,
  tabletLandscape: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)};
    }
  `,
  laptop: (...args) => css`
    @media (min-width: 1281px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 1681px) {
      ${css(...args)};
    }
  `
};
