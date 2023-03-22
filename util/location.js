const getCoordForAddress = () => {
  return {
    lat: 40.7484474,
    lon: -73.9871516,
  };
};

//code for api
// const axios = require("axios");
// const { response } = require("express");
// const HttpError = require("../models/http-error");
// const API_KEY = "";
// const getCoordForAddress = async (address) => {
//   const response = await axios.get(
//     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//       address
//     )}&key=${YOUR_API_KEY}`
//   );
//   const data = response.data;
//   if (!data || data.status === "ZERO_RESULTS") {
//     const error = HttpError(
//       "Could not find location for the specified address",
//       422
//     );
//     throw error;
//   }
//   const coordinates = data.results[0].geometry.location;
//   return coordinates;
// };
module.exports = getCoordForAddress;
