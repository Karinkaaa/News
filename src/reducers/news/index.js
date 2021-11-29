import { CHOOSE_CATEGORY, CHOOSE_COUNTRY, SET_NEWS } from "../../utils/constants/news";

const initialState = {
    articles: [],
    country: {
        code: "UA",
        label: "Ukraine",
        phone: "380"
    },
    category: {}
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
        case CHOOSE_CATEGORY: {
            return {
                ...state,
                category: action.category
            };
        }
        default:
            return state;
    }
};

export default News;