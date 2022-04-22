/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { companyName } from "../vars";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

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

const CricketScoreboard = () => {
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
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div>Player1</div>
                    <div>Player2</div>
                </div>
                {items.map((item, itemKey) => {
                    return (
                        <div
                            key={itemKey}
                            style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            <div style={{ margin: "0.25rem 0" }}>
                                <ButtonGroup variant="contained">
                                    <Button>1</Button>
                                    <Button>2</Button>
                                    <Button>3</Button>
                                </ButtonGroup>
                            </div>
                            <div>{item.label}</div>
                            <div>Player2</div>
                        </div>
                    );
                })}
            </Paper>
            <div id="activity-log">Activity goes here...</div>
        </div>
    );
};

export default CricketScoreboard;
