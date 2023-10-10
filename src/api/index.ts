// cityService.ts

import axios from 'axios';

export const getCountries = async (namePrefix: string) => {
  const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries',
    params: {namePrefix: namePrefix, limit: '10'},
    headers: {
      'X-RapidAPI-Key': '40da990644msh8929140ef5e088ep11742djsn359c36e53eea',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    const countries = response.data;
    return countries.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCountryDetail = async (namePrefix: string) => {
  const options = {
    method: 'GET',
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${namePrefix}`,
    params: {namePrefix: namePrefix},
    headers: {
      'X-RapidAPI-Key': '40da990644msh8929140ef5e088ep11742djsn359c36e53eea',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    const country = response.data;
    return country.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
