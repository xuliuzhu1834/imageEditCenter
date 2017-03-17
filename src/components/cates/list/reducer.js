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
  name: '',
  isUse: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.COMMIT:
      return assign({}, state, {
        [action.key]: action.value,
      });
    case TYPES.INIT_DATA_SUCCESS:
      return assign({}, state, {
        name: action.data.name,
        isUse: action.data.is_use,
      });

    default:
      return state;
  }
};

export default reducer;
