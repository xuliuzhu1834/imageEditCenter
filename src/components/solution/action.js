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

export const initDataSuccess = () => ({
  type: TYPES.INIT_DATA_SUCCESS,
});

export const initDataFail = () => ({
  type: TYPES.INIT_DATA_FAIL,
});
