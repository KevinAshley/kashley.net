/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { companyName } from "../vars";
import Paper from "@mui/material/Paper";
import { createUseStyles } from "react-jss";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";

const useStyles = createUseStyles({
    paper: {
        padding: "1rem",
        maxWidth: "350px",
        margin: "auto",
    },
    displayWindow: {
        marginBottom: "1rem",
    },
    numbers: {
        flexWrap: "wrap-reverse !important",
    },
});

const numKeysArray = new Array(9).fill(0);

const Home = (props) => {
    const { label } = props;
    const classes = useStyles();
    return (
        <div>
            <Helmet>
                <title>
                    {label} | {companyName}
                </title>
                <meta name="description" content={label} />
            </Helmet>

            <Paper className={classes.paper}>
                <OutlinedInput
                    type="number"
                    fullWidth
                    disabled
                    value={0}
                    className={classes.displayWindow}
                />
                <Grid container spacing={1}>
                    <Grid item xs={9}>
                        <Grid container spacing={1} className={classes.numbers}>
                            <Grid item xs={4}>
                                <Button variant="contained" color="error" fullWidth>
                                    C
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" fullWidth>
                                    0
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" fullWidth>
                                    .
                                </Button>
                            </Grid>

                            {numKeysArray.map((x, index) => {
                                const numValue = index + 1;
                                return (
                                    <Grid item xs={4} key={index}>
                                        <Button variant="contained" fullWidth>
                                            {numValue}
                                        </Button>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container spacing={1}>
                            {[
                                {
                                    label: "*",
                                },
                                {
                                    label: "/",
                                },
                                {
                                    label: "+",
                                },
                                {
                                    label: "-",
                                },
                            ].map((a, index) => {
                                const { label } = a;
                                return (
                                    <Grid item xs={12} key={index}>
                                        <Button variant="contained" color="secondary" fullWidth>
                                            {label}
                                        </Button>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary" fullWidth>
                            =
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Home;
