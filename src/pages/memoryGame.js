/** @format */

import React, { useState, useEffect } from "react";
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
        matched: false,
    };
});

const Item = (props) => {
    const { selected, matched, isFlashing, ...otherProps } = props;
    return (
        <Paper
            sx={{
                // visibility: selected ? "visible" : "hidden",
                backgroundColor:
                    isFlashing || selected ? "#1A2027" : matched ? "rgba(0,0,0,0)" : "#fff",
                color: isFlashing || selected ? "#fff" : "#1A2027",
                // ...theme.typography.body2,
                padding: 4,
                textAlign: "center",
                cursor: matched ? "auto" : "pointer",
            }}
            elevation={matched ? 0 : 1}
            {...otherProps}
        />
    );
};

const findSelectedIndex = (cards) => {
    const selectedCardIndex = cards.findIndex((card) => card.selected);
    return selectedCardIndex;
};

const MemoryGame = () => {
    const [cards, setCards] = useState(cardsArrayWithoutIcons);
    const [flashing, setFlashing] = useState([]);
    const [resetDialogIsOpen, setResetDialogIsOpen] = useState(false);
    const handleCardClick = (params) => {
        const { index } = params;
        const newCards = JSON.parse(JSON.stringify(cards));
        const thisCard = newCards[index];
        const selectedCardIndex = findSelectedIndex(newCards);
        const selectedCard = newCards[selectedCardIndex];

        // console.log("hoo", selectedCardIndex);
        if (selectedCardIndex === -1) {
            /// make a selection
            newCards[index].selected = true;
        } else if (selectedCardIndex === index) {
            /// undo selection
            newCards[selectedCardIndex].selected = false;
        } else if (thisCard.originalIndex === selectedCard.originalIndex) {
            /// correct selection
            newCards[selectedCardIndex].selected = false;
            newCards[selectedCardIndex].matched = true;
            newCards[index].matched = true;
            flashCardsByIndex([selectedCardIndex, index]);
        } else {
            /// wrong selection
            newCards[selectedCardIndex].selected = false;
            flashCardsByIndex([selectedCardIndex, index]);
        }

        setCards(newCards);
    };
    const handleClickOpen = () => {
        setResetDialogIsOpen(true);
    };
    const handleClose = () => {
        setResetDialogIsOpen(false);
    };
    const resetAll = () => {
        setCards(cardsArrayWithoutIcons);
    };

    const handleResetAndClose = () => {
        // setTally(JSON.parse(JSON.stringify(startingTallyState)));
        setResetDialogIsOpen(false);
        resetAll();
    };
    const flashCardsByIndex = (indexes = []) => {
        setFlashing(indexes);
    };
    useEffect(() => {
        if (flashing.length) {
            setTimeout(() => {
                setFlashing([]);
            }, 500);
        }
    }, [flashing]);

    // console.log("cards, flashing", cards, flashing);
    return (
        <Box maxWidth="md" sx={{ margin: "auto" }}>
            <Grid container spacing={2}>
                {cards.map((thisCard, thisIndex) => {
                    const { originalIndex, selected, matched } = thisCard;
                    const isFlashing = flashing.includes(thisIndex);
                    const Icon = uniqueCardsArray[originalIndex].icon;
                    const handleThisCardClick = () => {
                        handleCardClick({ index: thisIndex, originalIndex });
                    };
                    return (
                        <Grid
                            item
                            xs={4}
                            md={3}
                            key={thisIndex}
                            onClick={!matched ? handleThisCardClick : undefined}
                        >
                            <Item {...{ selected, matched, isFlashing }}>
                                <Icon
                                    fontSize="large"
                                    sx={{
                                        visibility:
                                            selected || matched || isFlashing ? "auto" : "hidden",
                                    }}
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
