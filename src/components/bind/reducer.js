/**
 * Created by brook on 2017/3/19.
 */
/**
 * Created by brook on 2017/3/10.
 */
import assign from 'object-assign';
import * as TYPES from './types';

const defaultState = {
  load: false,
  cates: [],
  attrs: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.COMMIT:
      return assign({}, state, {
        [action.key]: action.value,
      });
    case TYPES.GET_CATES_SUCCESS:
      return assign({}, state, {
        cates: action.data,
      });
    case TYPES.GET_ATTRS_SUCCESS:
      return assign({}, state, {
        attrs: action.data,
      });
    case TYPES.SUBMIT:
      return assign({}, state, {
        load: true,
      });
    case TYPES.SUBMIT_FAIL:
    case TYPES.SUBMIT_SUCCESS:
      return assign({}, state, {
        load: false,
      });
    default:
      return state;
  }
};

export default reducer;
