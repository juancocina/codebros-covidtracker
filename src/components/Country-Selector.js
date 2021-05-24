import React, { useState, useEffect } from "react";
import { NativeSelect } from "@material-ui/core";

import { OptionsDropdownContainer } from "./styles/Country-Selector.styles";

import { fetchCountries } from "../hooks/useCountries";

const CountrySelector = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <OptionsDropdownContainer>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </OptionsDropdownContainer>
  );
};

export default CountrySelector;
