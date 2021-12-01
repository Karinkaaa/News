import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { setNews } from "../../actions/news";
import { setMessageInfo } from "../../actions/info";
import { API_KEY } from "../../utils/constants/news";
import { NEWS_API } from "../../utils/links";
import { GET_NEWS_SAGA } from "../../utils/constants/newsSaga";

export function* getNewsSaga() {
    try {
        const { query, country, articlesPerPage, from } = yield select(state => state.news);

        const result = yield call(
            axios.get,
            NEWS_API,
            {
                params: {
                    q: query,
                    country: country === "" ? undefined : country.code.toLowerCase(),
                    max: articlesPerPage,
                    from,
                    token: API_KEY
                }
            }
        );

        yield put(setNews(result.data.articles));
    } catch (e) {
        yield put(setMessageInfo({ type: "error", text: e.message }));
    }
}

export function* watchGetNewsSaga() {
    yield takeEvery(GET_NEWS_SAGA, getNewsSaga);
}