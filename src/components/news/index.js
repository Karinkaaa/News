import React, { useEffect } from "react";
import PropTypes from "prop-types";
import key from "weak-key";
import { Container, Grid } from "@material-ui/core";
import OneNew from "./OneNew";
import SelectCountry from "./SelectCountry";
import SelectCategory from "./SelectCategory";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    div: {
        display: "flex",
        margin: "0 0 20px"
    }
});

const News = ({ articles, country, category, fetchNews, onChooseCountry, onChooseCategory }) => {
    const classes = useStyles();

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    return (
        <Container>
            <div className={classes.div}>
                <SelectCountry
                    country={country}
                    onChooseCountry={(country) => onChooseCountry(country)}
                />
                <SelectCategory
                    category={category}
                    onChooseCategory={(category) => onChooseCategory(category)}
                />
            </div>

            <Grid container spacing={5}>
                {
                    articles ? articles.map((item) => (
                        <Grid key={key(item)} item sm={12}>
                            <OneNew oneNew={item}/>
                        </Grid>
                    )) : ""
                }
            </Grid>
        </Container>
    );
};

News.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            source: PropTypes.shape({
                id: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.object
                ]),
                name: PropTypes.string.isRequired
            }).isRequired,
            author: PropTypes.string,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            url: PropTypes.string.isRequired,
            urlToImage: PropTypes.string,
            publishedAt: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    country: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    category: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    fetchNews: PropTypes.func.isRequired,
    onChooseCountry: PropTypes.func.isRequired,
    onChooseCategory: PropTypes.func.isRequired
};

export default News;