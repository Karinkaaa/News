import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const ArticlesPerPage = ({ style, articlesPerPage, onChangeArticlesPerPage }) => (
    <TextField
        className={style}
        label={"Enter the number of articles per page"}
        variant={"outlined"}
        type={"number"}
        InputProps={{ inputProps: { min: 1, max: 10 } }}
        value={articlesPerPage}
        onChange={(e) => onChangeArticlesPerPage(parseInt(e.target.value))}
    />
);

ArticlesPerPage.propTypes = {
    style: PropTypes.string.isRequired,
    articlesPerPage: PropTypes.number.isRequired,
    onChangeArticlesPerPage: PropTypes.func.isRequired
};

export default ArticlesPerPage;