/**
 * Created by brook on 2017/3/10.
 */
/**
 * Created by liufeng on 2017/1/9.
 */
import assign from 'object-assign';
import * as TYPES from './types';

const defaultState = {
  load: false,
  dataSource: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.COMMIT:
      return assign({}, state, {
        [action.key]: action.value,
      });
    case TYPES.INIT_DATA:
      return assign({}, state, {
        load: true,
      });
    case TYPES.INIT_DATA_SUCCESS:
      return assign({}, state, {
        dataSource: action.data.map(v => assign({}, v, { key: v.id })),
        load: false,
      });
    case TYPES.INIT_DATA_FAIL:
      return assign({}, state, {
        load: false,
      });
    default:
      return state;
  }
};

export default reducer;
