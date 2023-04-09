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
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const cardsArray = new Array(12).fill(0);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const MemoryGame = () => {
    const [resetDialogIsOpen, setResetDialogIsOpen] = useState(false);
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
                {cardsArray.map((thisCard, thisIndex) => {
                    return (
                        <Grid item xs={6} md={4} lg={3} key={thisIndex}>
                            <Item>1</Item>
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
