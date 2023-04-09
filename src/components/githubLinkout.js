/** @format */

import React from "react";
import Box from "@mui/material/Box";
import { usePageGithub } from "../hooks";
import Link from "@mui/material/Link";

const GithubLinkout = () => {
    const githubUrl = usePageGithub();
    return (
        <Box sx={{ textAlign: "center", mb: 2 }}>
            <Link href={githubUrl} target="_blank">
                View Source Code
            </Link>
        </Box>
    );
};

export default GithubLinkout;
