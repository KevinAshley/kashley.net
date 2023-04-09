/** @format */

import React from "react";

import { Helmet } from "react-helmet";
import { websiteName } from "../vars";
import Box from "@mui/material/Box";
import RoutedLink from "../components/routedLink";

const PageNotFound = () => {
    return (
        <div>
            <Helmet>
                <title>Page Not Found | {websiteName}</title>
                <meta name="description" content="Error 404: Page Not Found" />
            </Helmet>
            <Box sx={{ textAlign: "center" }}>
                <Box sx={{ fontSize: "5rem" }}>&#128561;</Box>
                <p>Sorry, this page has either been removed, or it never existed to begin with.</p>
                <p>
                    <RoutedLink href="/">Go to homepage</RoutedLink>
                </p>
            </Box>
        </div>
    );
};

export default PageNotFound;
