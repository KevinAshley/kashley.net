/** @format */

import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
// import LinearProgress from "@material-ui/core/LinearProgress";

// Inspired by the Facebook spinners.
const useStyles = makeStyles((theme) => {
    return {
        root: {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "&.overlayed": {
                background:
                    theme.palette.type === "dark"
                        ? "rgb(0 0 0 / 0.5)"
                        : "rgb(255 255 255 / 0.5)",
                position: "fixed",
                zIndex: "1301",
            },
            "&.inline": {
                position: "relative",
                width: "100%",
                height: "100%",
                flexGrow: "1",
            },
        },
        wrapper: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "2rem",
            paddingBottom: "2rem",
            position: "relative",
        },
        // top: {
        //     color: "#eef3fd",
        // },
        // bottom: {
        //     color: "#6798e5",
        //     animationDuration: "550ms",
        //     position: "absolute",
        //     left: 0,
        // },
    };
});

const LoadingSpinner = (props) => {
    const { loadingText, overlayed, inline } = props;
    const classes = useStyles();
    const determinate = typeof loadingText === "number" ? true : false;
    const [progress, setProgress] = useState(0);
    const progressStep = 1;

    useEffect(() => {
        if (determinate) {
            const timer = setInterval(() => {
                setProgress((prevProgress) => {
                    if (loadingText > prevProgress) {
                        return loadingText;
                    } else if (prevProgress + progressStep > 100) {
                        return 100;
                    } else {
                        if (prevProgress + progressStep < loadingText + 30) {
                            return prevProgress + progressStep;
                        } else {
                            return prevProgress;
                        }
                    }
                });
            }, 200);

            return () => {
                clearInterval(timer);
            };
        }
    }, [determinate, loadingText]);

    return (
        <div
            className={
                classes.root +
                (overlayed ? " overlayed" : "") +
                (inline ? " inline" : "")
            }
        >
            <div className={classes.wrapper}>
                {determinate ? (
                    <CircularProgress
                        variant="determinate"
                        value={progress}
                        size={70}
                        thickness={4}
                    />
                ) : (
                    <CircularProgress
                        variant="indeterminate"
                        size={70}
                        thickness={4}
                    />
                )}
            </div>
            {!determinate && <div>{loadingText}</div>}
        </div>
    );
};

export default LoadingSpinner;
