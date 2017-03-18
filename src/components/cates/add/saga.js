/**
 * Created by brook on 2017/3/18.
 */
import { put } from 'redux-saga/effects';
import { message } from 'antd';
import wrapperFork from '../../../lib/wrapperFork';
import { addSubmit } from '../server';
import { submitSuccess, submitFail } from './action';
import * as TYPES from './types';

function* submitSaga(action) {
  const data = yield addSubmit(action.data);
  if (!data || data.code !== '0') {
    message.error('创建失败');
    return yield put(submitFail());
  }
  message.success('创建成功');
  return yield put(submitSuccess());
}
export default function* () {
  yield wrapperFork(TYPES.SUBMIT, submitSaga);
}
