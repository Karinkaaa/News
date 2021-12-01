import { CHANGE_ARTICLES_PER_PAGE, CHOOSE_COUNTRY, SET_NEWS } from "../../utils/constants/news";

export const setNews = (articles) => ({
    type: SET_NEWS,
    articles
});

export const chooseCountry = (country) => ({
    type: CHOOSE_COUNTRY,
    country
});

export const changeArticlesPerPage = (articlesPerPage) => ({
    type: CHANGE_ARTICLES_PER_PAGE,
    articlesPerPage
});
