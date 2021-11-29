import { CHOOSE_CATEGORY, CHOOSE_COUNTRY, SET_NEWS } from "../../utils/constants/news";

export const setNews = (articles) => ({
    type: SET_NEWS,
    articles
});

export const chooseCountry = (country) => ({
    type: CHOOSE_COUNTRY,
    country
});

export const chooseCategory = (category) => ({
    type: CHOOSE_CATEGORY,
    category
});
