/** @format */

// /** @format */

// import React, { useState, useEffect } from "react";
// import Paper from "@mui/material/Paper";
// import PaperWrapper from "../components/paperWrapper";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// const defaultOptions = [
//     { label: "AMD - Advanced Micro Devices Inc.", value: "AMD" },
//     { label: "GOOG - Alphabet Inc.", value: "GOOG" },
//     { label: "MSFT - Microsoft Corporation", value: "MSFT" },
// ];

// const Stocks = () => {
//     const [selected, setSelected] = useState("");
//     const [processing, setProcessing] = useState(false);

//     const handleChange = (e) => {
//         setSelected(e.target.value);
//     };

//     const requestTheData = async (ticker) => {
//         setProcessing(true);
//         console.log("request the data for ", ticker);
//         var requestUrl =
//             "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY" +
//             // "&outputsize=full" +
//             "&symbol=" +
//             ticker +
//             "&apikey=BF9KJPW0QTI88ECE";
//         const response = await fetch(requestUrl, {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//         });
//         console.log("got a response");
//         const responseData = await response.json();
//         console.log("got response data", responseData);
//         if (!responseData) {
//             console.log("error there was a problem");
//         }
//         const innerData = await responseData["Time Series (Daily)"];
//     };

//     useEffect(() => {
//         if (selected) {
//             requestTheData(selected);
//         }
//     }, [selected]);
//     return (
//         <div>
//             <PaperWrapper>
//                 <FormControl fullWidth>
//                     <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-label"
//                         id="demo-simple-select"
//                         value={selected}
//                         label="Stock"
//                         onChange={handleChange}
//                     >
//                         {defaultOptions.map((thisOption, thisIndex) => {
//                             return (
//                                 <MenuItem value={thisOption.value} key={thisIndex}>
//                                     {thisOption.label}
//                                 </MenuItem>
//                             );
//                         })}
//                     </Select>
//                 </FormControl>
//             </PaperWrapper>
//         </div>
//     );
// };

// export default Stocks;
