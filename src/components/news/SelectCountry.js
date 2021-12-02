import React from "react";
import PropTypes from "prop-types";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { Countries } from "../../utils/data/Countries";

function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== "undefined"
        ? isoCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}

const SelectCountry = ({ style, countries, country, onChooseCountry }) => (
    <Autocomplete
        id={"country-select-demo"}
        className={style}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label ? option.label : ""}
        onChange={(e, v) => onChooseCountry(v ? v : { code: "", label: "" })}
        value={country}
        renderOption={(option) => (
            <React.Fragment>
                <span>{countryToFlag(option.code)}</span>
                {option.label} ({option.code}) +{option.phone}
            </React.Fragment>
        )}
        renderInput={(params) => (
            <TextField
                {...params}
                label={"Choose a country"}
                variant={"outlined"}
                inputProps={{
                    ...params.inputProps,
                    autoComplete: "off"
                }}
            />
        )}
    />
);

SelectCountry.defaultProps = {
    countries: Countries
};

SelectCountry.propTypes = {
    style: PropTypes.string.isRequired,
    country: PropTypes.shape({
        code: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        phone: PropTypes.string,
        suggested: PropTypes.bool
    }).isRequired,
    onChooseCountry: PropTypes.func.isRequired
};

export default SelectCountry;