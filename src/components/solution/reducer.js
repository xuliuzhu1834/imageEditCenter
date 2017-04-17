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
  cates: [],
  attrs: [],
  imgs: [],
  modal: false,
  imgModalData: {},
  imgModalIndex: 0,
  imgLoad: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.INIT_DATA:
      return defaultState;
    case TYPES.COMMIT:
      return assign({}, state, {
        [action.key]: action.value,
      });
    case TYPES.GET_CATES_SUCCESS:
      return assign({}, state, {
        cates: action.data,
      });
    case TYPES.GET_IMG_SUCCESS:
      return assign({}, state, {
        imgs: action.data.map(v => assign({}, v, { show: true })),
        imgLoad: false,
      });
    case TYPES.GET_ATTRS_SUCCESS:
      return assign({}, state, {
        attrs: action.data.map(v => v.attribute),
        imgLoad: false,
      });
    case TYPES.UPLOAD:
      return assign({}, state, {
        imgLoad: false,
        imgs: [...state.imgs, ...action.value.map(v => ({ value: v, show: true }))],
      });
    case TYPES.DEL_IMG_FUCK:
      return assign({}, state, {
        imgs: [
          ...state.imgs.slice(0, action.index),
          assign({}, state.imgs[action.index], { show: false }),
          ...state.imgs.slice(action.index + 1),
        ],
        imgLoad: false,
      });
    case TYPES.GET_IMG:
    case TYPES.DEL_IMG:
    case TYPES.GET_ATTRS:
    case TYPES.SUBMIT:
      return assign({}, state, {
        imgLoad: true,
      });
    case TYPES.DEL_IMG_FAIL:
    case TYPES.GET_IMG_FAIL:
    case TYPES.SUBMIT_SUCCESS:
    case TYPES.SUBMIT_FAIL:
      return assign({}, state, {
        imgLoad: false,
      });
    case TYPES.CHANGE_NAME:
      return assign({}, state, {
        imgModalData: action.data,
        imgModalIndex: action.index,
        modal: !state.modal,
      });
    default:
      return state;
  }
};

export default reducer;
