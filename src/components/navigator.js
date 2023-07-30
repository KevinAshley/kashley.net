/** @format */

import React, { Fragment } from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { mainRoutes, portfolioRoutes } from "../routes";

const categories = [
    {
        // id: "Main",
        children: [
            // {
            //     id: "Authentication",
            //     icon: <PeopleIcon />,
            //     active: true,
            // },
            ...mainRoutes,
        ],
    },
    {
        id: "Portfolio",
        children: [...portfolioRoutes],
        href: "/portfolio/",
    },
];

const item = {
    py: "2px",
    px: 3,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover, &:focus": {
        bgcolor: "rgba(255, 255, 255, 0.08)",
    },
};

// const itemCategory = {
//     boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
//     py: 1.5,
//     px: 3,
// };

const Navigator = (props) => {
    const { ...other } = props;
    const { onClose } = props;
    const location = useLocation();
    const { pathname } = location;

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem
                    sx={{
                        color: "#fff",
                        pt: "10px",
                        pb: "10px",
                        pr: "1rem",
                    }}
                >
                    <IconButton
                        sx={{
                            ml: "auto",
                            display: "inline-block",
                            lineHeight: 0,
                        }}
                        onClick={onClose}
                    >
                        <CloseIcon
                            sx={{
                                color: "#fff",
                                fontSize: "1.25rem",
                            }}
                        />
                    </IconButton>
                </ListItem>

                {categories.map(({ id, children, href }, categoryIndex) => (
                    <Box key={categoryIndex} sx={{ bgcolor: "#101F33" }}>
                        {id ? (
                            <ListItem sx={{ py: 2, px: 3 }}>
                                <ListItemButton
                                    component={Link}
                                    to={href}
                                    onClick={onClose}
                                    sx={{ color: "#fff", padding: 0, fontSize: "14px" }}
                                >
                                    {id}
                                </ListItemButton>
                            </ListItem>
                        ) : (
                            <Divider sx={{ mb: 2 }} />
                        )}

                        {children.map(({ label: childId, icon, route, suppress = false }) => {
                            const Icon = icon;
                            const active = pathname === route;
                            if (suppress) {
                                return <Fragment key={childId}></Fragment>;
                            }
                            return (
                                <ListItem disablePadding key={childId}>
                                    <ListItemButton
                                        selected={active}
                                        sx={item}
                                        component={Link}
                                        to={route}
                                        onClick={onClose}
                                    >
                                        <ListItemIcon>
                                            <Icon />
                                        </ListItemIcon>
                                        <ListItemText>{childId}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}

                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
};

export default Navigator;
