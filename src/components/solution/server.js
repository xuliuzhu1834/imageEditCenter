/**
 * Created by brook on 2017/3/18.
 */

import fetch from '../../lib/fetch';

export const getCatesSer = () => (
  fetch('/category/list_category',
    {
      method: 'get',
    })
);

export const getAttrsSer = id => (
  fetch(`/attribute/list_door_attribute?category_id=${id}`,
    {
      method: 'get',
    })
);

export const getImgSer = id => (
  fetch(`/attribute/list_attribute_value?attribute_id=${id}`, {
    method: 'get',
  })
);

export const delImgSer = (cateId, attrId, imgId) => (
  fetch(`/door/delete_door_combiner?category_id=${cateId}&attribute_id=${attrId}&attribute_value_id=${imgId}`, {
    method: 'get',
  })
);

export const submitSer = data => (
  fetch('/door/create_door_combiner', {
    method: 'POST',
    body: JSON.stringify(data),
  })
);
