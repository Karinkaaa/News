import { CHANGE_ARTICLES_PER_PAGE, CHOOSE_COUNTRY, SET_NEWS } from "../../utils/constants/news";

const initialState = {
    articles: [],
    query: "a",
    country: {
        code: "UA",
        label: "Ukraine",
        phone: "380"
    },
    articlesPerPage: 5,
    from: new Date().toJSON().slice(0, 10)
};

const News = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return {
                ...state,
                articles: action.articles
            };
        }
        case CHOOSE_COUNTRY: {
            return {
                ...state,
                country: action.country
            };
        }
        case CHANGE_ARTICLES_PER_PAGE: {
            return {
                ...state,
                articlesPerPage: action.articlesPerPage
            };
        }
        default:
            return state;
    }
};

export default News;