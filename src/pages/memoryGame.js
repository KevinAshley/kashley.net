/** @format */

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import GithubLinkout from "../components/githubLinkout";
import { styled } from "@mui/material/styles";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AnchorIcon from "@mui/icons-material/Anchor";
import BackHandIcon from "@mui/icons-material/BackHand";
import BalanceIcon from "@mui/icons-material/Balance";
import CastleIcon from "@mui/icons-material/Castle";
// const cardsArray = new Array(12).fill(0);
const uniqueCardsArray = [
    {
        icon: AcUnitIcon,
        originalIndex: 0,
    },
    {
        icon: AirportShuttleIcon,
        originalIndex: 1,
    },
    {
        icon: AnchorIcon,
        originalIndex: 2,
    },
    {
        icon: BackHandIcon,
        originalIndex: 3,
    },
    {
        icon: BalanceIcon,
        originalIndex: 4,
    },
    {
        icon: CastleIcon,
        originalIndex: 5,
    },
];

const combinedCardsArray = [...uniqueCardsArray, ...uniqueCardsArray];

const cardsArrayWithoutIcons = combinedCardsArray.map((thisCardObject) => {
    const { originalIndex } = thisCardObject;
    return {
        originalIndex,
        selected: false,
    };
});

const Item = (props) => {
    const { selected, ...otherProps } = props;
    return (
        <Paper
            sx={{
                // visibility: selected ? "visible" : "hidden",
                backgroundColor: selected ? "#1A2027" : "#fff",
                color: selected ? "#fff" : "#1A2027",
                // ...theme.typography.body2,
                padding: 4,
                textAlign: "center",
            }}
            {...otherProps}
        />
    );
};

const MemoryGame = () => {
    const [cards, setCards] = useState(cardsArrayWithoutIcons);
    const [resetDialogIsOpen, setResetDialogIsOpen] = useState(false);
    const handleCardClick = (params) => {
        const { index, originalIndex } = params;
        const newCards = JSON.parse(JSON.stringify(cards));
        console.log("hoo", newCards);
        newCards[index].selected = true;
        setCards(newCards);
    };
    const handleClickOpen = () => {
        setResetDialogIsOpen(true);
    };
    const handleClose = () => {
        setResetDialogIsOpen(false);
    };

    const handleResetAndClose = () => {
        // setTally(JSON.parse(JSON.stringify(startingTallyState)));
        setResetDialogIsOpen(false);
    };
    return (
        <Box maxWidth="md" sx={{ margin: "auto" }}>
            <Grid container spacing={2}>
                {cards.map((thisCard, thisIndex) => {
                    const { originalIndex, selected } = thisCard;
                    const Icon = uniqueCardsArray[originalIndex].icon;
                    const handleThisCardClick = () => {
                        handleCardClick({ index: thisIndex, originalIndex });
                    };
                    return (
                        <Grid item xs={4} md={3} key={thisIndex} onClick={handleThisCardClick}>
                            <Item {...{ selected }}>
                                <Icon
                                    fontSize="large"
                                    sx={{ visibility: selected ? "visible" : "hidden" }}
                                />
                            </Item>
                        </Grid>
                    );
                })}
            </Grid>
            <Box sx={{ textAlign: "center", mt: 3 }}>
                <Button variant="outlined" color="error" onClick={handleClickOpen}>
                    Reset Game
                </Button>
            </Box>

            <Dialog open={resetDialogIsOpen} onClose={handleClose}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure you want to reset the game?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleResetAndClose} variant="contained">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default MemoryGame;
