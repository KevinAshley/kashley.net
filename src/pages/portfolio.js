/** @format */

import React, { Fragment } from "react";
// import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Content from "../components/content";
import { ReactLogo, MuiLogo, FirebaseLogo } from "../components/logos";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Typography from '@mui/material/Typography';
import { CardActionArea } from "@mui/material";
import { portfolioRoutes } from "../routes";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const backgroundGradient = "rgba(0,0,0,0.7)";

// const makeRibbonStyles = (theme) => {
//     const { palette } = theme;
//     const { grey } = palette;
//     return { background: grey["900"], textAlign: "center", lineHeight: 0, padding: "0.5rem" };
// };

// const iconStyles = { fontSize: "40px", mx: "1rem" };

const Portfolio = () => {
    return (
        <Box maxWidth="md" sx={{ margin: "auto", marginTop: "3rem" }}>
            <Grid container spacing={2}>
                {portfolioRoutes.map((thisItem, thisIndex) => {
                    const { icon, route, label, description } = thisItem;
                    const CardIcon = icon;
                    return (
                        <Grid item xs={12} md={6} lg={4} key={thisIndex}>
                            <Card sx={{ textAlign: "center" }}>
                                <CardActionArea href={route}>
                                    <CardContent>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                padding: "1rem",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    border: "4px solid rgba(0,0,0,0.3)",
                                                    borderRadius: "50%",
                                                    width: "50px",
                                                    height: "50px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <CardIcon
                                                    fontSize="large"
                                                    color="secondary"
                                                    sx={{ position: "absolute" }}
                                                />
                                            </Box>
                                        </Box>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {label}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default Portfolio;
