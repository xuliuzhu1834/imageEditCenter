/**
 * Created by brook on 2017/3/18.
 */
import fetch from '../../lib/fetch';

export const allCates = () => (
  fetch('/category/list_category', {
    method: 'get',
  })
);

export const addSubmit = args => (
  fetch(
    '/category/create_category', {
      method: 'POST',
      body: JSON.stringify(args),
    },
  )
);

export const editSubmit = args => (
  fetch(
    '/category/update_category', {
      method: 'POST',
      body: JSON.stringify(args),
    },
  )
);

export const delCate = id => (
  fetch(
    `/category/delete_category?id=${id}`,
    {
      method: 'GET',
    },
  )
);

