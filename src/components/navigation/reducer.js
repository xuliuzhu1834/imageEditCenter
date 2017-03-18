/**
 * Created by yeyangmei on 16/9/13.
 */
import { LOCATION_CHANGE } from 'react-router-redux';
import assign from 'object-assign';

const menus = [
  {
    name: '导航列表',
    key: 'goods',
    icon: 'bars',
    children: [
      {
        link: '/cates',
        name: '分类列表',
        crubName: '分类',
        nav: true,
      },
      {
        link: '/cates/add',
        name: '新增分类',
        crubName: '新增分类',
        nav: false,
      },
      {
        link: '/cates/edit',
        name: '编辑分类',
        crubName: '编辑分类',
        nav: false,
      },
      {
        link: '/solution',
        name: '自定义',
        crubName: '自定义',
        nav: true,
      },
      // {
      //   link: '/attribute',
      //   name: '属性列表',
      //   crubName: '属性',
      //   nav: true,
      // },
      // {
      //   link: '/attribute/add',
      //   name: '新增属性',
      //   crubName: '新增属性',
      //   nav: false,
      // },
      // {
      //   link: '/attribute/edit',
      //   name: '编辑属性',
      //   crubName: '编辑属性',
      //   nav: false,
      // },
    ],
  },
];

const linkList = menus.reduce((concated, { children }) => (
  concated.concat(children)), []);
const defaultState = {
  current: '/',
  load: false,
  menus,
  linkList,
  expandable: 'expand',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return Object.assign({}, state, {
        current: action.payload.pathname,
      });
    case 'nav_init_user_info_res':
      return assign({}, state, {
        load: true,
      });
    case 'nav_expand':
      return assign({}, state, {
        expandable: action.value,
      });
    default:
      return state;
  }
};
