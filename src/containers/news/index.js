import { connect } from "react-redux";
import News from "../../components/news";
import { getNews } from "../../actions/newsSaga";
import { chooseCategory, chooseCountry } from "../../actions/news";

const mapStateToProps = (state) => {
    return {
        articles: state.news.articles,
        country: state.news.country,
        category: state.news.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNews: () => dispatch(getNews()),
        onChooseCountry: (country) => {
            dispatch(chooseCountry(country));
            dispatch(getNews());
        },
        onChooseCategory: (category) => {
            dispatch(chooseCategory(category));
            dispatch(getNews());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);