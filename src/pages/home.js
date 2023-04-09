/** @format */

import React, { Fragment } from "react";
// import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Content from "../components/content";
import { ReactLogo, MuiLogo, FirebaseLogo } from "../components/logos";
import Link from "@mui/material/Link";

const backgroundGradient = "rgba(0,0,0,0.7)";

const makeRibbonStyles = (theme) => {
    const { palette } = theme;
    const { grey } = palette;
    return { background: grey["900"], textAlign: "center", lineHeight: 0, padding: "0.5rem" };
};

const iconStyles = { fontSize: "40px", mx: "1rem" };

const Home = () => {
    return (
        <Fragment>
            <Box
                sx={{
                    color: "#fff",
                    backgroundImage: `linear-gradient(0deg, ${backgroundGradient}, ${backgroundGradient}), url(/images/pexels-photo-12027143-cropped.jpg)`,
                    width: "100%",
                    minHeight: "28vw",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    padding: "2rem",
                    textShadow: "0px 0px 5px black",
                    display: "flex",
                }}
            >
                <Box
                    sx={{
                        maxWidth: 700,
                        margin: "auto",
                        overflow: "hidden",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            textAlign: "center",
                            mt: 5,
                            mb: 0.5,
                            fontSize: {
                                xs: "2rem",
                                lg: "3rem",
                            },
                        }}
                    >
                        Kevin Ashley
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            // mb: 0,
                            fontSize: "12px",
                            marginBottom: "3rem",
                        }}
                    >
                        Sacramento, CA
                    </Typography>
                    <p>
                        Thanks for visiting my website. Check out my portfolio entries for examples
                        of my work. All of the code for this website is available to review at
                        github.
                    </p>
                    <Box sx={{ mb: 5 }}>
                        {" "}
                        <Button
                            variant="contained"
                            href="https://github.com/KevinAshley/kashley.net"
                            target="_blank"
                        >
                            Github Repo
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={makeRibbonStyles}>
                <ReactLogo sx={iconStyles} />
                <FirebaseLogo
                    sx={{
                        ...iconStyles,
                        fontSize: "90px",
                        marginTop: "-25px",
                        marginBottom: "-25px",
                    }}
                />
                <MuiLogo sx={iconStyles} />
            </Box>
            <Typography
                component="p"
                sx={{
                    // mb: 0,
                    fontSize: "12px",
                    textAlign: "center",
                    padding: "10px",
                    borderBottom: "solid rgba(0,0,0,0.1) 1px",
                }}
            >
                This website was built with React.js, Material UI components, and&nbsp;Firebase
                hosting.
            </Typography>
            <Box sx={{ padding: "2rem", textAlign: "center" }}>
                <p>Looking for more examples of my work?</p>
                <p>
                    Check out these sites:
                    <br />
                    <Link href={"https://www.salescricket.com/"} target="_blank">
                        www.salescricket.com
                    </Link>
                    <br />
                    <Link href={"https://www.ihouseweb.com/"} target="_blank">
                        www.ihouseweb.com
                    </Link>
                </p>
            </Box>
        </Fragment>
    );
};

export default Home;
