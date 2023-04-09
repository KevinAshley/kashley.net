/** @format */

import React from "react";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const RoutedLink = (props) => {
    const { href, ...otherProps } = props;
    return <Link component={RouterLink} to={href} {...otherProps} />;
};

export default RoutedLink;
