/** @format */

import React, { Fragment } from "react";
import PageNotFound from "../pages/404";
import { routes } from "../routes";
import { Routes, Route } from "react-router-dom";

const PageRouter = () => {
    return (
        <Fragment>
            <Routes>
                {routes.map((item, index) => {
                    const { component, label } = item;
                    const PageComponent = component;
                    return (
                        <Route
                            exact
                            key={index}
                            path={item.route}
                            element={<PageComponent {...{ label }} />}
                        />
                    );
                })}
                <Route element={<PageNotFound />} />
            </Routes>
        </Fragment>
    );
};

export default PageRouter;
