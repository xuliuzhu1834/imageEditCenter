/**
 * Created by brook on 2017/3/10.
 */

import * as TYPES from './types';

export const initData = () => ({
  type: TYPES.INIT_DATA,
});
export const initDataSuccess = data => ({
  type: TYPES.INIT_DATA_SUCCESS,
  data,
});
export const initDataFail = () => ({
  type: TYPES.INIT_DATA_FAIL,
});
