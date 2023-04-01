/** @format */

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { companyName } from "../vars";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { createUseStyles } from "react-jss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

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

const useTallyDisplayStyles = createUseStyles({
    iconsWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    rightSlash: {
        position: "absolute",
        fontSize: "1.5rem",
        lineHeight: 0,
        transform: "rotateZ(45deg)",
    },
    leftSlash: {
        position: "absolute",
        fontSize: "1.5rem",
        lineHeight: 0,
        transform: "rotateZ(-45deg)",
    },
    circle: {
        fontSize: "1.5rem",
        lineHeight: 0,
    },
});

const TallyDisplayBlock = (props) => {
    const classes = useTallyDisplayStyles();
    const { thisTally, value } = props;
    if (thisTally === 0) {
        return "";
    } else if (thisTally === 1) {
        return (
            <div className={classes.iconsWrapper}>
                <div className={classes.rightSlash}>|</div>
            </div>
        );
    } else if (thisTally === 2) {
        return (
            <div className={classes.iconsWrapper}>
                <div className={classes.rightSlash}>|</div>
                <div className={classes.leftSlash}>|</div>
            </div>
        );
    } else if (thisTally === 3) {
        return (
            <div className={classes.iconsWrapper}>
                <div className={classes.rightSlash}>|</div>
                <div className={classes.leftSlash}>|</div>
                <div className={classes.circle}>
                    <PanoramaFishEyeIcon fontSize="small" />
                </div>
            </div>
        );
    } else if (thisTally > 3) {
        return "+" + ((thisTally - 3) * value).toString();
    }
    return thisTally;
};

const useButtonGroupStyles = createUseStyles({
    middleButton: {
        minWidth: "50px",
        minHeight: "40px",
        paddingLeft: "5px !important",
        paddingRight: "5px !important",
        color: "#6f6f6f !important",
    },
    outerButton: {
        minWidth: "40px !important",
        paddingLeft: "5px !important",
        paddingRight: "5px !important",
    },
});

const CustomButtonGroup = (props) => {
    const classes = useButtonGroupStyles();
    const { color, itemIndex, value, player, playerTally, updateTally, isClosedOut } = props;
    // const itemTally = tally[itemIndex];
    // const thisPlayersItemTally = itemTally[player];

    const handleSubtract = () => {
        let newValue = playerTally - 1;
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
        let newValue = playerTally + 1;
        updateTally({
            player,
            itemIndex,
            newValue,
        });
    };
    return (
        <div
            style={{
                margin: "0.5rem 0",
            }}
        >
            <ButtonGroup variant="contained">
                <Button
                    {...{ color }}
                    onClick={handleSubtract}
                    disabled={playerTally === 0}
                    className={classes.outerButton}
                >
                    <RemoveIcon fontSize="small" />
                </Button>
                <Button disabled className={classes.middleButton}>
                    <TallyDisplayBlock
                        thisTally={playerTally}
                        {...{ value, thisTally: playerTally }}
                    />
                </Button>
                <Button
                    {...{ color }}
                    onClick={handleAddition}
                    disabled={isClosedOut}
                    className={classes.outerButton}
                >
                    <AddIcon fontSize="small" />
                </Button>
            </ButtonGroup>
        </div>
    );
};

const useNumberStatusStyles = createUseStyles({
    status: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    closed: {
        opacity: 0.5,
    },
    crossedOut: {
        transform: "rotateZ(90deg)",
        position: "absolute",
        color: "#c10000",
        fontSize: "1.5rem",
    },
});

const NumberStatus = (props) => {
    const classes = useNumberStatusStyles();
    const { label, isClosedOut } = props;
    return (
        <div className={[classes.status, isClosedOut ? classes.closed : ""].join(" ")}>
            {label}
            {isClosedOut && <div className={classes.crossedOut}>|</div>}
        </div>
    );
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
                    const itemTally = tally[itemIndex];
                    const playerOneTally = itemTally["playerOne"];
                    const playerTwoTally = itemTally["playerTwo"];
                    const isClosedOut = playerOneTally >= 3 && playerTwoTally >= 3;
                    return (
                        <div key={itemIndex} className={classes.row}>
                            <CustomButtonGroup
                                color="primary"
                                {...{
                                    value,
                                    playerTally: playerOneTally,
                                    itemIndex,
                                    updateTally,
                                    player: "playerOne",
                                    isClosedOut,
                                }}
                            />
                            <NumberStatus label={item.label} {...{ isClosedOut }} />
                            <CustomButtonGroup
                                color="secondary"
                                {...{
                                    value,
                                    playerTally: playerTwoTally,
                                    itemIndex,
                                    updateTally,
                                    player: "playerTwo",
                                    isClosedOut,
                                }}
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
