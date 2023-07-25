// data.js
const freightRates = [];

export const addFreightRate = (destination, rate) => {
  freightRates.push({ destination, rate });
};

export const getFreightRates = () => {
  return freightRates;
};

