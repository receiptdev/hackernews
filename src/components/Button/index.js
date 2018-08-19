import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { withLoading } from "../Loading";

const Button = ({ onClick, className, children }) => (
    <button onClick={onClick} className={className} type="button">
        {children}
    </button>
);

export const ButtonWithLoading = withLoading(Button);

Button.defaultProps = {
    className: ""
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Button;
