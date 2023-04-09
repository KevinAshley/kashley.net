/** @format */

import * as React from "react";
// import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Navigator from "./navigator";
// import Content from "./content";
import Header from "./header";
import PageRouter from "./pageRouter";
import { useLocation } from "react-router-dom";
import PageTitle from "./pageTitle";

function Copyright() {
    return (
        <Typography variant="body2" color="#fff" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/">
                Kevin Ashley
            </Link>{" "}
            {new Date().getFullYear()}.
        </Typography>
    );
}

const drawerWidth = 256;

const baseStyles = {
    flex: 1,
    bgcolor: "#eaeff1",
};

const useFooterStyles = (theme) => {
    const { palette } = theme;
    const { grey } = palette;
    return { px: 2, py: 1, bgcolor: grey["800"] };
};

export default function Paperbase() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();
    const { pathname } = location;

    const isHomepage = pathname === "/";

    const mainStyles = isHomepage ? baseStyles : { ...baseStyles, py: 6, px: 2 };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <CssBaseline />
            <Box component="nav">
                <Navigator
                    PaperProps={{ style: { width: drawerWidth } }}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                />
            </Box>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header onDrawerToggle={handleDrawerToggle} />
                <Box component="main" sx={mainStyles}>
                    {!isHomepage && <PageTitle />}
                    <PageRouter />
                </Box>
                <Box component="footer" sx={useFooterStyles}>
                    <Copyright />
                </Box>
            </Box>
        </Box>
    );
}
