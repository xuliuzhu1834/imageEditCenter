/**
 * Created by brook on 2017/3/18.
 */
import { put, call } from 'redux-saga/effects';
import { message } from 'antd';
import { hashHistory } from 'react-router';
import wrapperFork from '../../../lib/wrapperFork';
import { editSubmit } from '../server';
import { submitSuccess, submitFail } from './action';
import * as TYPES from './types';

function* submitSaga(action) {
  const data = yield editSubmit(action.data);
  if (!data || data.code !== '0') {
    message.error('更新失败');
    return yield put(submitFail());
  }
  message.success('更新成功');
  yield put(submitSuccess());
  return yield call(hashHistory.push('/cates'));
}
export default function* () {
  yield wrapperFork(TYPES.SUBMIT, submitSaga);
}
