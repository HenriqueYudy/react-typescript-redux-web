import { all , takeLatest } from 'redux-saga/effects';
import { ApplicationsTypes } from './applications/types';
import { load } from './applications/sagas';

export default function* rootSaga(){
    return yield all([
        takeLatest(ApplicationsTypes.LOAD_REQUEST, load)
    ]);
}