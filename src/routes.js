/** @format */

import { loadableOptions, handleImportError } from "./utils";
import loadable from "@loadable/component";
import HomeIcon from "@mui/icons-material/Home";

const Home = loadable(() => import("./pages/home"), loadableOptions);
const CricketScoreboard = loadable(
    () => import("./pages/cricketScoreboard"),
    loadableOptions
);
const Stocks = loadable(() => import("./pages/stocks"), loadableOptions);

export const mainRoutes = [
    {
        label: "Home",
        component: Home,
        route: "/",
        icon: HomeIcon,
    },
    {
        label: "Contact Me",
        component: Home,
        route: "/contact-me/",
        icon: HomeIcon,
    },
];

export const portfolioRoutes = [
    {
        label: "Test",
        component: Home,
        route: "/test/",
        icon: HomeIcon,
    },
    {
        label: "Cricket Scoreboard",
        component: CricketScoreboard,
        route: "/cricket-scoreboard/",
        icon: HomeIcon,
    },
    {
        label: "Stocks",
        component: Stocks,
        route: "/stocks/",
        icon: HomeIcon,
    },
];

export const routes = mainRoutes.concat(portfolioRoutes);
