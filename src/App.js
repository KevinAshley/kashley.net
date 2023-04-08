/** @format */

import React from "react";

import PageWrapper from "./components/pageWrapper";
import ThemeProvider from "./components/themeProvider";

function App() {
    return (
        <ThemeProvider>
            <PageWrapper />
        </ThemeProvider>
    );
}

export default App;
