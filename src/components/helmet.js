/** @format */

import React from "react";
import { websiteName } from "../vars";
import { usePageName } from "../hooks";
import { Helmet as ReactHelmet } from "react-helmet";

const Helmet = () => {
    const pageName = usePageName();
    return (
        <ReactHelmet>
            <title>
                {pageName} | {websiteName}
            </title>
            <meta name="description" content="Error 404: Page Not Found" />
        </ReactHelmet>
    );
};

export default Helmet;
