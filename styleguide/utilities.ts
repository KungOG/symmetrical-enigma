export const BASE_UNIT = "rem";

const calcValue = (value) => {
  return 10 * value;
};

/*
 * * Typography * *
 */
export const typography = {
  primaryFont: "'Dosis'",
  secondaryFont: "sans-serif",
  lineHeight: "1.5",
  letterSpacing: "1.5px",
  weight: {
    bold: '700',
    semibold: '600',
    medium: '500',
    small: '400',
  },
  size: {
    xxLarge: `${calcValue(7)}${BASE_UNIT}`,
    xLarge: `${calcValue(4.8)}${BASE_UNIT}`,
    large: `${calcValue(3.2)}${BASE_UNIT}`,
    medium: `${calcValue(2.4)}${BASE_UNIT}`,
    base: `${calcValue(2)}${BASE_UNIT}`,
    small: `${calcValue(1.6)}${BASE_UNIT}`,
    xSmall: `${calcValue(1.4)}${BASE_UNIT}`,
    xxSmall: `${calcValue(1)}${BASE_UNIT}`,
  },
};

/*
 * * Colors * *
 */
export const colors = {
  red: "#ff2323",
  gold: "#ecce66",
  black: "#000000",
  white: "#ffffff",
};

/*
 * * Spacers * *
 */
export const space = {
  xxLarge: `${calcValue(6.4)}${BASE_UNIT}`,
  xLarge: `${calcValue(4.8)}${BASE_UNIT}`,
  large: `${calcValue(3.6)}${BASE_UNIT}`,
  medium: `${calcValue(2.4)}${BASE_UNIT}`,
  base: `${calcValue(2)}${BASE_UNIT}`,
  small: `${calcValue(1.6)}${BASE_UNIT}`,
  xSmall: `${calcValue(0.8)}${BASE_UNIT}`,
  xxSmall: `${calcValue(0.4)}${BASE_UNIT}`,
  xxxSmall: `${calcValue(0.2)}${BASE_UNIT}`,

  circle: `${calcValue(99)}${BASE_UNIT}`,
  smallBorder: `${calcValue(0.5)}${BASE_UNIT}`,
};

/*
 * * Animations * *
 */
export const animations = {
  speed: "0.3s",
};
