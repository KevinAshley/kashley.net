/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { companyName } from "../vars";
import Content from "../components/content";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | {companyName}</title>
                <meta name="description" content="Home Page" />
            </Helmet>
            <Content />
        </div>
    );
};

export default Home;
