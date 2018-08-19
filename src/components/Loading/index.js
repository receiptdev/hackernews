import React from "react";
import PropTypes from "prop-types";

const Loading = () => <div>Loading...</div>;

export const withLoading = Component => ({ isLoading, ...rest }) =>
    isLoading ? <Loading /> : <Component {...rest} />;

Loading.propTypes = {
    isLoading: PropTypes.string
};
export default Loading;
