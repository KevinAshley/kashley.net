/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { companyName } from "../vars";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Stocks = () => {
    return (
        <div>
            <Helmet>
                <title>Home | {companyName}</title>
                <meta name="description" content="Home Page" />
            </Helmet>
            <Paper
                sx={{
                    maxWidth: 936,
                    margin: "auto",
                    overflow: "hidden",
                    padding: "2rem 1rem",
                }}
            >
                TEST123
            </Paper>
        </div>
    );
};

export default Stocks;
