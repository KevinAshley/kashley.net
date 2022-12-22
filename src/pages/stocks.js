/** @format */

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { companyName } from "../vars";
import Paper from "@mui/material/Paper";
import PaperWrapper from "../components/paperWrapper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const defaultOptions = [
    { label: "AMD - Advanced Micro Devices Inc.", value: "AMD" },
    { label: "GOOG - Alphabet Inc.", value: "GOOG" },
    { label: "MSFT - Microsoft Corporation", value: "MSFT" },
];

const Stocks = () => {
    const [selected, setSelected] = useState();
    const handleChange = (params) => {
        console.log(params);
    };
    return (
        <div>
            <Helmet>
                <title>Home | {companyName}</title>
                <meta name="description" content="Home Page" />
            </Helmet>
            <PaperWrapper>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selected}
                        label="Stock"
                        onChange={handleChange}
                    >
                        {defaultOptions.map((thisOption, thisIndex) => {
                            return (
                                <MenuItem value={thisOption.value} key={thisIndex}>
                                    {thisOption.label}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </PaperWrapper>
        </div>
    );
};

export default Stocks;
