/*
  Title: Random Quote Generator program.
  Author: niladri Saha. 
  Description: This file contains a Module Scaffolder, and this module scaffolder will have a function that will fetch random quotes from an api and will return one quote at a time, each at an interval of 1 seconds. 
*/

// module Scaffolder
const quote = {};

// fetch quotes from this API
const apiKey = "f5360gD6yNfcjocFpyOm1Q==LdfvGO4bz8xCUXlV";
const apiURL = "https://api.api-ninjas.com/v1/quotes";
const requestOptions = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  }
};

fetch(apiURL, requestOptions)
  .then((response) => {
    if(!response.ok){
      throw new Error("network response was not ok!");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error("unable to fetch data from this given API endpoint, error: " + err.message);
  })