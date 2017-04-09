/**
 * Created by brook on 2017/3/19.
 */

import fetch from '../../lib/fetch';

export const getCatesSer = () => (
  fetch('/category/list_category',
    {
      method: 'get',
    })
);

export const getAttrsSer = () => (
  fetch('/attribute/list_attribute',
    {
      method: 'get',
    })
);
export const submitSer = data => (
  fetch('/door/bind_attribute_to_category', {
    method: 'POST',
    body: JSON.stringify(data),
  })
);

