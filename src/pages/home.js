/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { companyName } from "../vars";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
// import Content from "../components/content";

const Home = () => {
    return (
        <Box
            sx={{
                color: "red",
                backgroundImage: 'url("/images/pexels-photo-12027143.jpeg")',
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                padding: "2rem",
            }}
        >
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
                <h1>Welcome!</h1>
                <p>This website was built with React.js and the Material UI components library.</p>
                <p>- Kevin Ashley.</p>
            </Paper>
        </Box>
    );
};

export default Home;
