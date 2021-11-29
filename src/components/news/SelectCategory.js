import React from "react";
import PropTypes from "prop-types";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { Categories } from "../../utils/data/Categories";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    option: {
        fontSize: 16,
        "& > span": {
            marginRight: 10,
            fontSize: 18
        },
        width: "40%"
    }
});

const SelectCategory = ({ categories, category, onChooseCategory }) => {
    const classes = useStyles();

    return (
        <Autocomplete
            id={"category-select-demo"}
            className={classes.option}
            options={categories}
            autoHighlight
            getOptionLabel={(option) => option.label ? option.label : ""}
            onChange={(e, v) => onChooseCategory(v ? v : "")}
            value={category}
            renderOption={(option) => (<React.Fragment>{option.label}</React.Fragment>)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={"Choose a category of news"}
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

SelectCategory.defaultProps = {
    categories: Categories
};

SelectCategory.propTypes = {
    category: PropTypes.object.isRequired,
    onChooseCategory: PropTypes.func.isRequired
};

export default SelectCategory;