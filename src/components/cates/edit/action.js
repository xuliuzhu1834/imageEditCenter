/**
 * Created by brook on 2017/3/10.
 */

import * as TYPES from './types';

export const commit = (key, value) => ({
  type: TYPES.COMMIT,
  key,
  value,
});
export const initData = data => ({
  type: TYPES.INIT_DATA,
  data,
});


export const submit = args => ({
  type: TYPES.SUBMIT,
  data: args,
});
export const submitSuccess = () => ({
  type: TYPES.SUBMIT_SUCCESS,
});
export const submitFail = () => ({
  type: TYPES.SUBMIT_FAIL,
});
