import React from "react";
import PropTypes from "prop-types";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Countries } from "../../utils/data/Countries";

const useStyles = makeStyles({
    option: {
        fontSize: 16,
        "& > span": {
            marginRight: 10,
            fontSize: 18
        },
        minWidth: "25%",
        marginRight: 50
    }
});

function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== "undefined"
        ? isoCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}

const SelectCountry = ({ countries, country, onChooseCountry }) => {
    const classes = useStyles();

    return (
        <Autocomplete
            id={"country-select-demo"}
            className={classes.option}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label ? option.label : ""}
            onChange={(e, v) => onChooseCountry(v ? v : "")}
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
};

SelectCountry.defaultProps = {
    countries: Countries
};

SelectCountry.propTypes = {
    country: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    onChooseCountry: PropTypes.func.isRequired
};

export default SelectCountry;