/** @format */

// import React from "react";
import { loadableOptions, handleImportError } from "./utils";
import loadable from "@loadable/component";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";

const Home = loadable(
    () => import("./pages/home").catch(handleImportError),
    loadableOptions
);

export const routes = [
    {
        route: "/",
        label: "Home",
        icon: HomeTwoToneIcon,
        iconColor: "primary",
        component: Home,
    },
];
