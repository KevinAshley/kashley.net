/** @format */

import { loadableOptions, handleImportError } from "./utils";
import loadable from "@loadable/component";
import HomeIcon from "@mui/icons-material/Home";
// import MailIcon from "@mui/icons-material/Mail";
import CalculateIcon from "@mui/icons-material/Calculate";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
const Home = loadable(() => import("./pages/home"), loadableOptions);
const CricketScoreboard = loadable(() => import("./pages/cricketScoreboard"), loadableOptions);
// const Stocks = loadable(() => import("./pages/stocks"), loadableOptions);
const Calculator = loadable(() => import("./pages/calculator"), loadableOptions);
const MemoryGame = loadable(() => import("./pages/memoryGame"), loadableOptions);

export const mainRoutes = [
    {
        label: "Home",
        component: Home,
        route: "/",
        icon: HomeIcon,
    },
    // {
    //     label: "Contact Me",
    //     component: Home,
    //     route: "/contact-me/",
    //     icon: MailIcon,
    // },
];

export const portfolioRoutes = [
    {
        label: "Calculator",
        component: Calculator,
        route: "/calculator/",
        icon: CalculateIcon,
        github: "https://github.com/KevinAshley/kashley.net/blob/main/src/pages/calculator.js",
    },
    {
        label: "Cricket Scoreboard",
        component: CricketScoreboard,
        route: "/cricket-scoreboard/",
        icon: ScoreboardIcon,
        github: "https://github.com/KevinAshley/kashley.net/blob/main/src/pages/cricketScoreboard.js",
    },
    {
        label: "Memory Game",
        component: MemoryGame,
        route: "/memory-game/",
        icon: PsychologyAltIcon,
        github: "",
    },
    // {
    //     label: "Stocks",
    //     component: Stocks,
    //     route: "/stocks/",
    //     icon: HomeIcon,
    // },
];

export const routes = mainRoutes.concat(portfolioRoutes);
