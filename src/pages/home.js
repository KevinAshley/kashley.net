/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { companyName } from "../vars";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | {companyName}</title>
                <meta name="description" content="Home Page" />
            </Helmet>
            <h1>Home TEST</h1>
        </div>
    );
};

export default Home;
