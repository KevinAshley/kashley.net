/** @format */
import { routes } from "../routes";
import { useLocation } from "react-router-dom";

export const usePageName = () => {
    const location = useLocation();
    const { pathname } = location;
    var pageName = "404";
    routes.forEach((page) => {
        if (pathname === page.route) {
            pageName = page.label;
        }
    });
    return pageName;
};

export const usePageGithub = () => {
    const location = useLocation();
    const { pathname } = location;
    var github = "";
    routes.forEach((page) => {
        if (pathname === page.route) {
            github = page.github;
        }
    });
    return github;
};
