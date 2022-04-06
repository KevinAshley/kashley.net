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

const PageNotFound = () => {
    return (
        <div>
            <Helmet>
                <title>Page Not Found | {companyName}</title>
                <meta name="description" content="Error 404: Page Not Found" />
            </Helmet>
            <PageBand>
                <PageContainer>
                    <PageRow>
                        <PageCol xs={12}>
                            <h1>404</h1>
                        </PageCol>
                    </PageRow>
                </PageContainer>
            </PageBand>
        </div>
    );
};

export default PageNotFound;
