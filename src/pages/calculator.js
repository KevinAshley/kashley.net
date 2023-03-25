/** @format */

import React, { useState } from "react";
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
    const [total, setTotal] = useState(0);
    const [operator, setOperator] = useState();
    const [operand, setOperand] = useState();

    const handleNumberPress = (num) => {
        let newNumber = operator
            ? Number((operand || 0).toString() + num.toString())
            : Number(total.toString() + num.toString());
        if (operator) {
            setOperand(newNumber);
        } else {
            setTotal(newNumber);
        }
    };

    const handleOperatorPress = (op) => {
        setOperator(op);
    };

    const handleClear = () => {
        setTotal(0);
        setOperand(null);
        setOperator(null);
    };

    const equals = () => {
        let newTotal = 0;
        if (operator === "+") {
            newTotal = Number(total) + Number(operand);
        } else if (operator === "-") {
            newTotal = Number(total) - Number(operand);
        } else if (operator === "*") {
            newTotal = Number(total) * Number(operand);
        } else if (operator === "/") {
            newTotal = Number(total) / Number(operand);
        }
        setTotal(newTotal);
        setOperator(null);
        setOperand(null);
    };
    console.log(total, operator, operand);

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
                    value={operand ? operand : total}
                    className={classes.displayWindow}
                />
                <Grid container spacing={1}>
                    <Grid item xs={9}>
                        <Grid container spacing={1} className={classes.numbers}>
                            <Grid item xs={4}>
                                <Button
                                    variant="contained"
                                    color="error"
                                    fullWidth
                                    onClick={handleClear}
                                >
                                    C
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={() => handleNumberPress(0)}
                                >
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
                                const handleClick = () => handleNumberPress(numValue);
                                return (
                                    <Grid item xs={4} key={index}>
                                        <Button variant="contained" fullWidth onClick={handleClick}>
                                            {numValue}
                                        </Button>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container spacing={1}>
                            {["*", "/", "+", "-"].map((a, index) => {
                                const handleClick = () => handleOperatorPress(a);
                                return (
                                    <Grid item xs={12} key={index}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            fullWidth
                                            onClick={handleClick}
                                        >
                                            {a}
                                        </Button>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary" fullWidth onClick={equals}>
                            =
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Home;
