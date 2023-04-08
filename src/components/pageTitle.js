/** @format */

import React from "react";
import Typography from "@mui/material/Typography";
import { usePageName } from "../hooks";

const PageTitle = () => {
    const pageName = usePageName();
    return (
        <Typography
            variant="h1"
            component="h1"
            sx={{
                textAlign: "center",
                mb: 3,
            }}
        >
            {pageName}
        </Typography>
    );
};

export default PageTitle;
