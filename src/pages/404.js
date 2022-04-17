/** @format */

import React from "react";

import { Helmet } from "react-helmet";
import { companyName } from "../vars";

const PageNotFound = () => {
    return (
        <div>
            <Helmet>
                <title>Page Not Found | {companyName}</title>
                <meta name="description" content="Error 404: Page Not Found" />
            </Helmet>
            <h1>404</h1>
        </div>
    );
};

export default PageNotFound;
