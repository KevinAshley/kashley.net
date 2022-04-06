/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { companyName } from "../vars";
import {
    PageBand,
    PageContainer,
    PageRow,
    PageCol,
} from "../components/layout";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | {companyName}</title>
                <meta name="description" content="Home Page" />
            </Helmet>
            <PageBand>
                <PageContainer>
                    <PageRow>
                        <PageCol xs={12}>
                            <h1>Home</h1>
                        </PageCol>
                    </PageRow>
                </PageContainer>
            </PageBand>
        </div>
    );
};

export default Home;
