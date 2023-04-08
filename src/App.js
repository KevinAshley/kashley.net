/** @format */

import React from "react";

import PageWrapper from "./components/pageWrapper";
import ThemeProvider from "./components/themeProvider";
import Helmet from "./components/helmet";

function App() {
    return (
        <ThemeProvider>
            <Helmet />
            <PageWrapper />
        </ThemeProvider>
    );
}

export default App;
