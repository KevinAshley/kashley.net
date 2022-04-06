/** @format */

import React from "react";

import LoadingSpinner from "../components/loadingSpinner";

export const handleImportError = () => {
    if (isWindowAvailable()) {
        window.location.reload();
    }
};

export const loadableOptions = {
    fallback: <LoadingSpinner inline />,
};

export const isWindowAvailable = () => {
    let isAvailable = false;
    if (typeof window !== "undefined") {
        isAvailable = true;
    }
    return isAvailable;
};
