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
const Portfolio = loadable(() => import("./pages/portfolio"), loadableOptions);

export const mainRoutes = [
    {
        label: "Home",
        component: Home,
        route: "/",
        icon: HomeIcon,
    },
    {
        label: "Portfolio",
        component: Portfolio,
        route: "/portfolio/",
        icon: HomeIcon,
        suppress: true,
    },
];

export const portfolioRoutes = [
    {
        label: "Calculator",
        component: Calculator,
        route: "/calculator/",
        icon: CalculateIcon,
        github: "https://github.com/KevinAshley/kashley.net/blob/main/src/pages/calculator.js",
        description: "Basic mathematical calculator for quick calculations",
    },
    {
        label: "Cricket Scoreboard",
        component: CricketScoreboard,
        route: "/cricket-scoreboard/",
        icon: ScoreboardIcon,
        github: "https://github.com/KevinAshley/kashley.net/blob/main/src/pages/cricketScoreboard.js",
        description: "Scoreboard for the popular dart game known as 'Cricket'",
    },
    {
        label: "Memory Game",
        component: MemoryGame,
        route: "/memory-game/",
        icon: PsychologyAltIcon,
        github: "https://github.com/KevinAshley/kashley.net/blob/main/src/pages/memoryGame.js",
        description: "Test your memory with this card matching game",
    },
    // {
    //     label: "Stocks",
    //     component: Stocks,
    //     route: "/stocks/",
    //     icon: HomeIcon,
    // },
];

export const routes = mainRoutes.concat(portfolioRoutes);
