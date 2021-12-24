import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./style";

interface Props {
  children: any;
  handleClick: () => {};
}

const Button = ({ handleClick, children }: Props) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.any,
};

export default Button;
