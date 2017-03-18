/**
 * Created by brook on 2017/3/18.
 */
import { put } from 'redux-saga/effects';
import { message } from 'antd';
import wrapperFork from '../../../lib/wrapperFork';
import { allCates, delCate } from '../server';
import { initDataSuccess, initData } from './action';
import * as TYPES from './types';

function* allCatesSaga() {
  const data = yield allCates();
  if (!data || data.code !== '0') {
    return message.error('获取分类列表失败');
  }
  return yield put(initDataSuccess(data.info.data));
}

function* delCateSa(action) {
  const data = yield delCate(action.id);
  if (!data || data.code !== '0') {
    return message.error('删除数据失败');
  }
  message.success('删除数据成功');
  return yield put(initData());
}

export default function* () {
  yield wrapperFork(TYPES.INIT_DATA, allCatesSaga);
  yield wrapperFork(TYPES.DEL_CATE, delCateSa);
}
