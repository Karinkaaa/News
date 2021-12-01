import React, { useEffect } from "react";
import PropTypes from "prop-types";
import key from "weak-key";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OneNew from "./OneNew";
import SelectCountry from "./SelectCountry";
import ArticlesPerPage from "./ArticlesPerPage";

const useStyles = makeStyles({
    div: {
        display: "flex",
        margin: "0 0 20px"
    },
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

const News = ({ articles, country, articlesPerPage, fetchNews, onChooseCountry, onChangeArticlesPerPage }) => {
    const classes = useStyles();

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    return (
        <Container>
            <div className={classes.div}>
                <SelectCountry
                    style={classes.option}
                    country={country}
                    onChooseCountry={(country) => onChooseCountry(country)}
                />

                <ArticlesPerPage
                    style={classes.option}
                    articlesPerPage={articlesPerPage}
                    onChangeArticlesPerPage={onChangeArticlesPerPage}
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
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            publishedAt: PropTypes.string.isRequired,
            source: PropTypes.shape({
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    ).isRequired,
    country: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    articlesPerPage: PropTypes.number.isRequired,
    fetchNews: PropTypes.func.isRequired,
    onChooseCountry: PropTypes.func.isRequired,
    onChangeArticlesPerPage: PropTypes.func.isRequired
};

export default News;