/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { companyName } from "../vars";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { createUseStyles } from "react-jss";

const items = [
    {
        label: "20",
        value: 20,
    },
    {
        label: "19",
        value: 19,
    },
    {
        label: "18",
        value: 18,
    },
    {
        label: "17",
        value: 17,
    },
    {
        label: "16",
        value: 16,
    },
    {
        label: "15",
        value: 15,
    },
    {
        label: "bulls",
        value: 25,
    },
];

const CustomButtonGroup = (props) => {
    const { color } = props;
    return (
        <div
            style={{
                margin: "0.25rem 0",
            }}
        >
            <ButtonGroup variant="contained">
                <Button {...{ color }}>-</Button>
                <Button disabled>X</Button>
                <Button {...{ color }}>+</Button>
            </ButtonGroup>
        </div>
    );
};

const useNumberStatusStyles = createUseStyles({
    status: {
        display: "flex",
        alignItems: "center",
    },
});

const NumberStatus = (props) => {
    const classes = useNumberStatusStyles();
    const { label } = props;
    return <div className={classes.status}>{label}</div>;
};

const useStyles = createUseStyles({
    row: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
    },
});

const CricketScoreboard = () => {
    const classes = useStyles();
    return (
        <div>
            <Helmet>
                <title>Home | {companyName}</title>
                <meta name="description" content="Home Page" />
            </Helmet>
            <Paper
                sx={{
                    maxWidth: 500,
                    margin: "auto",
                    overflow: "hidden",
                    padding: "2rem 1rem",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Player1</div>
                    <div>Player2</div>
                </div>
                {items.map((item, itemKey) => {
                    return (
                        <div key={itemKey} className={classes.row}>
                            <CustomButtonGroup color="primary" />
                            <NumberStatus label={item.label} />
                            <CustomButtonGroup color="secondary" />
                        </div>
                    );
                })}
                <hr />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>0</div>
                    <div>0</div>
                </div>
            </Paper>
        </div>
    );
};

export default CricketScoreboard;
