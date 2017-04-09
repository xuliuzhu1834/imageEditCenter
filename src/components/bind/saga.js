/**
 * Created by brook on 2017/3/19.
 */
import { put } from 'redux-saga/effects';
import { message } from 'antd';
import wrapperFork from '../../lib/wrapperFork';
import { getAttrsSer, getCatesSer, submitSer } from './server';
import {
  getAttrsSuccess, getCatesSuccess, submitSuccess, submitFail,
} from './action';
import * as TYPES from './types';

function* getCates() {
  const data = yield getCatesSer();
  yield put(getCatesSuccess(data.info.data));
}
function* getAttrs() {
  const data = yield getAttrsSer();
  yield put(getAttrsSuccess(data.info.data));
}
function* submit(action) {
  const data = yield submitSer(action.data);
  if (!data || data.code !== '0') {
    message.error('绑定失败');
    return yield put(submitFail());
  }
  message.success('绑定成功');
  return yield put(submitSuccess());
}
export default function* () {
  yield wrapperFork(TYPES.GET_CATES, getCates);
  yield wrapperFork(TYPES.GET_ATTRS, getAttrs);
  yield wrapperFork(TYPES.SUBMIT, submit);
}