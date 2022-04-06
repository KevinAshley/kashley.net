/** @format */

import React from "react";
import MuiContainer from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import PropTypes from "prop-types";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
    pageBand: {
        padding: "2rem 0",
    },
}));

export const PageBand = (props) => {
    const classes = useStyles();
    const { className, ...rest } = props;
    const classNames = [className, classes.pageBand, "page-band"].join(" ");
    return <div className={classNames} {...rest} />;
};

PageBand.propTypes = {
    className: PropTypes.string,
};

export const PageContainer = (props) => {
    const { className, ...rest } = props;
    const classNames = [className, "page-container"].join(" ");
    return <MuiContainer className={classNames} {...rest} />;
};

PageContainer.propTypes = {
    className: PropTypes.string,
};

export const PageRow = (props) => {
    const { className, ...rest } = props;
    const classNames = [className, "page-row"].join(" ");
    return <Grid container className={classNames} spacing={4} {...rest} />;
};

PageRow.propTypes = {
    className: PropTypes.string,
};

export const PageCol = (props) => {
    const { className, ...rest } = props;
    const classNames = [className, "page-col"].join(" ");
    return <Grid item className={classNames} {...rest} />;
};

PageCol.propTypes = {
    className: PropTypes.string,
};

export const Container = (props) => {
    const { className, ...rest } = props;
    const classNames = [className, "container"].join(" ");
    return <MuiContainer className={classNames} {...rest} />;
};

Container.propTypes = {
    className: PropTypes.string,
};

export const Row = (props) => {
    const { className, ...rest } = props;
    const classNames = [className, "row"].join(" ");
    return <Grid container className={classNames} spacing={3} {...rest} />;
};

Row.propTypes = {
    className: PropTypes.string,
};

export const Col = (props) => {
    const { className, ...rest } = props;
    const classNames = [className, "col"].join(" ");
    return <Grid item className={classNames} {...rest} />;
};

Col.propTypes = {
    className: PropTypes.string,
};
