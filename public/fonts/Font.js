import css from "styled-jsx/css";

export const fontStyles = css.global`
  @font-face {
    font-family: "Noto Sans KR";
    src:
      url("/public/fonts/NotoSansKR-Black.otf") format("otf"),
      url("/public/fonts/NotoSansKR-Bold.otf") format("otf"),
      url("/public/fonts/NotoSansKR-Regular.otf") format("otf");
  }
`;

export const Font = {
  Family: "Noto Sans KR",
  Size: {
    // XS: 0.625rem
    XS: "10px",
    // S: 0.8125rem
    S: "13px",
    // M: 1.125rem
    M: "18px",
    // L: 1.5rem
    L: "24px",
    // XL: 2.25rem
    XL: "36px",
    // XXL: 3.125rem
    XXL: "50px",
  },
};
