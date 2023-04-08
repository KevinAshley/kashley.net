/** @format */

import React from "react";

import { Helmet } from "react-helmet";
import { websiteName } from "../vars";

const PageNotFound = () => {
    return (
        <div>
            <Helmet>
                <title>Page Not Found | {websiteName}</title>
                <meta name="description" content="Error 404: Page Not Found" />
            </Helmet>
            <h1>404</h1>
        </div>
    );
};

export default PageNotFound;
