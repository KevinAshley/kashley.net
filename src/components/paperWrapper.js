/** @format */

import React from "react";
import Paper from "@mui/material/Paper";

const PaperWrapper = (props) => {
    const { children, ...otherProps } = props;
    return (
        <Paper
            sx={{
                maxWidth: 936,
                margin: "auto",
                overflow: "hidden",
                padding: "2rem 1rem",
            }}
            {...{ ...otherProps }}
        >
            {children}
        </Paper>
    );
};

export default PaperWrapper;
