const scrennSize = {
  pc:1280,
  tablet:960
};

const tabletScreen = () => `@media (min-width: ${scrennSize.tablet}px)`;
const pcScreen = () => `@media (min-width: ${scrennSize.pc}px)`;





export const mixin = {
  tabletScreen,
  pcScreen
}

export const defaultFont = {
  fontFamily: "hot-kointaikk, sans-serif",
  fontWeight: "400",
  fontStyle: "normal",
};

export const color = {

}

