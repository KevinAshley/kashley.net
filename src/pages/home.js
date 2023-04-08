/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { companyName } from "../vars";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Content from "../components/content";
const backgroundGradient = "rgba(0,0,0,0.7)";

const Home = () => {
    return (
        <Box
            sx={{
                color: "#fff",
                backgroundImage: `linear-gradient(0deg, ${backgroundGradient}, ${backgroundGradient}), url(/images/pexels-photo-12027143-cropped.jpg)`,
                width: "100%",
                minHeight: "30vh",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                padding: "2rem",
                textShadow: "0px 0px 5px black",
            }}
        >
            <Helmet>
                <title>Home | {companyName}</title>
                <meta name="description" content="Home Page" />
            </Helmet>
            <Box
                sx={{
                    maxWidth: 936,
                    margin: "auto",
                    overflow: "hidden",
                    padding: "2rem",
                    textAlign: "center",
                }}
            >
                <h1>Welcome!</h1>
                <p>
                    Thanks for visiting my website. Check out my portfolio for examples of my work.
                    All of the code for this website is available to review at github.
                </p>
                <Button
                    variant="contained"
                    href="https://github.com/KevinAshley/kashley.net"
                    target="_blank"
                >
                    Github Repo
                </Button>
                <p>
                    Kevin Ashley
                    <br />
                    Sacramento, CA
                </p>
            </Box>
        </Box>
    );
};

export default Home;
