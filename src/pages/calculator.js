/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { companyName } from "../vars";
import Content from "../components/content";

const Home = (props) => {
    const { label } = props;
    return (
        <div>
            <Helmet>
                <title>
                    {label} | {companyName}
                </title>
                <meta name="description" content={label} />
            </Helmet>
            Calculator HERE
        </div>
    );
};

export default Home;
