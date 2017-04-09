/**
 * Created by brook on 2017/3/19.
 */

import * as TYPES from './types';

export const commit = (key, value) => ({
  type: TYPES.COMMIT,
  key,
  value,
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
