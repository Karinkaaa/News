import { connect } from "react-redux";
import News from "../../components/news";
import { getNews } from "../../actions/newsSaga";
import { changeArticlesPerPage, chooseCountry } from "../../actions/news";

const mapStateToProps = (state) => {
    return {
        articles: state.news.articles,
        country: state.news.country,
        articlesPerPage: state.news.articlesPerPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNews: () => dispatch(getNews()),
        onChooseCountry: (country) => {
            dispatch(chooseCountry(country));
            dispatch(getNews());
        },
        onChangeArticlesPerPage: (articlesPerPage) => {
            dispatch(changeArticlesPerPage(articlesPerPage));
            dispatch(getNews());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);