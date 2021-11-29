import { all } from "redux-saga/effects";
import { watchGetNewsSaga } from "./news/getNewsSaga";

export default function* mainSaga() {
    yield all([
        watchGetNewsSaga()
    ]);
}