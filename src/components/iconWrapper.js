/** @format */

import React from "react";
// import IconButton from '@material-ui/core/IconButton';
import SvgIcon from "@mui/material/SvgIcon";

const IconWrapper = (props) => {
    const { children, className, color, colorTwo, ...iconProps } = props;
    const classNames = [
        className,
        color ? `stroke-${color}` : "",
        colorTwo ? `fill-${colorTwo}` : "",
    ];
    return (
        <SvgIcon className={classNames.join(" ")} {...iconProps}>
            {children}
        </SvgIcon>
    );
};

export default IconWrapper;
