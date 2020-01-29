import axios, { AxiosResponse } from "axios";
// This is example of calling 3rd party api
export const getAllCountries = async () => {
  let result: AxiosResponse = await axios
    .get("https://restcountries.eu/rest/v2/all")
    .catch(err => {
      throw err;
    });
  // check if there is actual data
  return result.data ? result.data : null;
};
