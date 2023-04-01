/** @format */

import React, { useState } from "react";
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

const startingTallyState = items.map(() => {
    return {
        playerOne: 0,
        playerTwo: 0,
    };
});

const useButtonGroupStyles = createUseStyles({
    middleButton: {
        minWidth: "50px",
    },
});

const CustomButtonGroup = (props) => {
    const classes = useButtonGroupStyles();
    const { color, tally, itemIndex, value, player, updateTally } = props;
    const itemTally = tally[itemIndex];
    const thisPlayersItemTally = itemTally[player];

    const handleSubtract = () => {
        let newValue = thisPlayersItemTally - 1;
        if (newValue < 0) {
            newValue = 0;
        }
        updateTally({
            player,
            itemIndex,
            newValue,
        });
    };
    const handleAddition = () => {
        let newValue = thisPlayersItemTally + 1;
        updateTally({
            player,
            itemIndex,
            newValue,
        });
    };
    return (
        <div
            style={{
                margin: "0.25rem 0",
            }}
        >
            <ButtonGroup variant="contained">
                <Button {...{ color }} onClick={handleSubtract}>
                    -
                </Button>
                <Button disabled className={classes.middleButton}>
                    {thisPlayersItemTally}
                </Button>
                <Button {...{ color }} onClick={handleAddition}>
                    +
                </Button>
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
    const [tally, setTally] = useState(startingTallyState);
    const updateTally = (params) => {
        const { player, itemIndex, newValue } = params;
        const newTally = [...tally];
        newTally[itemIndex][player] = newValue;
        setTally(newTally);
    };

    return (
        <div>
            <Helmet>
                <title>Home | {companyName}</title>
                <meta name="description" content="Home Page" />
            </Helmet>
            <Paper
                sx={{
                    maxWidth: 400,
                    margin: "auto",
                    overflow: "hidden",
                    padding: "2rem 1rem",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Player1</div>
                    <div>Player2</div>
                </div>
                {items.map((item, itemIndex) => {
                    const { value } = item;
                    return (
                        <div key={itemIndex} className={classes.row}>
                            <CustomButtonGroup
                                color="primary"
                                {...{ value, tally, itemIndex, updateTally, player: "playerOne" }}
                            />
                            <NumberStatus label={item.label} />
                            <CustomButtonGroup
                                color="secondary"
                                {...{ value, tally, itemIndex, updateTally, player: "playerTwo" }}
                            />
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
