/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { companyName } from "../vars";
import Paper from "@mui/material/Paper";
// import Content from "../components/content";

const Home = () => {
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
                    padding: "2rem",
                    textAlign: "center",
                }}
            >
                <h1>Welcome to Kashley.net</h1>
                <p>This site is owned and operated by Kevin Ashley.</p>
            </Paper>
        </div>
    );
};

export default Home;
