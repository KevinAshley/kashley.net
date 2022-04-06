/** @format */

import React from "react";
import {
    createTheme,
    // styled,
    ThemeProvider,
    // darken,
} from "@mui/material/styles";

import GlobalStyles from "@mui/material/GlobalStyles";
import Navbar from "./components/navbar";
import PageRouter from "./components/pageRouter";

const customTheme = createTheme({
    palette: {
        primary: {
            main: "#5a4dff",
        },
    },
});

const globalCss = {
    body: {
        margin: 0,
    },
};

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <GlobalStyles styles={globalCss} />
            <Navbar />
            <PageRouter />
        </ThemeProvider>
    );
}

export default App;
