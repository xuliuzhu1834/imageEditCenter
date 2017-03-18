/**
 * Created by brook on 2017/3/17.
 */
import assign from 'object-assign';
import * as TYPES from './types';

const defaultState = {
  load: false,
  name: '',
  value: '',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.COMMIT:
      return assign({}, state, {
        [action.key]: action.value,
      });
    case TYPES.SUBMIT:
      return assign({}, state, {
        load: true,
      });
    case TYPES.SUBMIT_SUCCESS:
      return assign({}, state, {
        load: false,
      });
    case TYPES.SUBMIT_FAIL:
      return assign({}, state, {
        load: false,
      });
    default:
      return state;
  }
};

export default reducer;
