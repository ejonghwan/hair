import React from "react";
import clsx from "clsx";

enum ButtonSize {
  T = "tiny",
  XS = "xsmall",
  S = "small",
  M = "medium",
  L = "large",
  XL = "xLarge",
}

enum TextColor {
  BLACK = "black",
  GRAY = "gray",
  GREEN = "green",
  WHITE = "white",
}

enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "--secondary",
  SECONDARY_WHITE = "--teriary-white",
  TERTIARY_OPACITY = "--teriary-opacity",
  TERTIARY = "--tertiary",
  OUTLINE_TEAL = "--outline-teal",
  OUTLINE_GRAY = "--outline-gray",
  TEXT = "text",
  TEXT_ARROM = "--arrow",
  ICON = "__gray-icon",
  ICON_WQUARE = "__gray-square",
  ICON_BORDER = "__gray-border",
  ICON_SHADOW = "__gray-shadow",
  PURE = "pure",
  LOADING = "loading",
}

const Button = () => {
  return <button>Button</button>;
};

export default Button;
