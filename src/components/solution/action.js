/**
 * Created by mac on 17/3/18.
 */
import * as TYPES from './types';

export const commit = (key, value) => ({
  type: TYPES.COMMIT,
  key,
  value,
});

export const initData = () => ({
  type: TYPES.INIT_DATA,
});

export const getAttrs = () => ({
  type: TYPES.GET_ATTRS,
});
export const getAttrsSuccess = data => ({
  data,
  type: TYPES.GET_ATTRS_SUCCESS,
});
export const getCates = () => ({
  type: TYPES.GET_CATES,
});
export const getCatesSuccess = data => ({
  data,
  type: TYPES.GET_CATES_SUCCESS,
});
export const getImg = id => ({
  id,
  type: TYPES.GET_IMG,
});
export const getImgSuccess = data => ({
  data,
  type: TYPES.GET_IMG_SUCCESS,
});
export const getImgFail = () => ({
  type: TYPES.GET_IMG_FAIL,
});
export const upload = value => ({
  value,
  type: TYPES.UPLOAD,
});
export const delImg = (cateId, attrId, imgid, index) => ({
  cateId,
  attrId,
  imgid,
  index,
  type: TYPES.DEL_IMG,
});
export const delImgFuck = index => ({
  index,
  type: TYPES.DEL_IMG_FUCK,
});

export const delImgSuccess = () => ({
  type: TYPES.DEL_IMG_SUCCESS,
});
export const delImgFail = () => ({
  type: TYPES.DEL_IMG_FAIL,
});
export const changeName = (data, index) => ({
  data,
  index,
  type: TYPES.CHANGE_NAME,
});
export const submit = data => ({
  data,
  type: TYPES.SUBMIT,
});
export const submitSuccess = () => ({
  type: TYPES.SUBMIT_SUCCESS,
});
export const submitFail = () => ({
  type: TYPES.SUBMIT_FAIL,
});

