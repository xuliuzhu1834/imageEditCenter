/**
 * Created by brook on 2017/3/18.
 */
import { put } from 'redux-saga/effects';
import { message } from 'antd';
import wrapperFork from '../../lib/wrapperFork';
import { getAttrsSer, getCatesSer, getImgSer, delImgSer, submitSer } from './server';
import {
  getAttrsSuccess, getCatesSuccess, getImg, getImgSuccess, getImgFail, delImgFail,
  submitFail,
} from './action';
import * as TYPES from './types';

function* getCates() {
  const data = yield getCatesSer();
  yield put(getCatesSuccess(data.info.data));
}
function* getAttrs(action) {
  const data = yield getAttrsSer(action.id);
  yield put(getAttrsSuccess(data.info.data));
}
function* getImgSaga(action) {
  const data = yield getImgSer(action.id);
  if (!data || data.code !== '0') {
    message.error('获取属性数据失败');
    return yield put(getImgFail());
  }
  return yield put(getImgSuccess(data.info.data));
}
function* delImgSaga(action) {
  const data = yield delImgSer(action.cateId, action.attrId, action.imgid);
  // TODO: 图片并没有删除，并且再次点击删除会报错
  if (!data || data.code !== '0') {
    message.error('图片删除失败');
    return yield put(delImgFail());
  }
  message.success('图片删除成功');
  return yield put({ type: TYPES.GET_IMG, id: action.attrId });
}

export function* submit(action) {
  const data = submitSer(action.data);
  if (!data || data.code !== '0') {
    message.error('自定义失败');
    return yield put(submitFail());
  }
  message.success('自定义成功');
  return yield put(getImg(action.attribute_id));
}

export default function* () {
  yield wrapperFork(TYPES.GET_CATES, getCates);
  yield wrapperFork(TYPES.GET_ATTRS, getAttrs);
  yield wrapperFork(TYPES.GET_IMG, getImgSaga);
  yield wrapperFork(TYPES.DEL_IMG, delImgSaga);
  yield wrapperFork(TYPES.SUBMIT, submit);
}
