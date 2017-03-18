import React, { PropTypes } from 'react';
import { Modal, Input } from 'antd';
import assign from 'object-assign';
import { commit } from './action';

const ModalComp = ({
  modal,
  imgs,
  imgModalData,
  imgModalIndex,
  dispatch,
}) => (
  <Modal
    title="修改图片描述"
    visible={modal}
    onOk={() => {
      // TODO: 缺少接口, 无法更新图片名，新添加的可以修改
      if (imgModalData.name && imgModalData.name !== imgs[imgModalIndex].name) {
        dispatch(commit('imgs', [
          ...imgs.slice(0, imgModalIndex),
          imgModalData,
          ...imgs.slice(imgModalIndex + 1),
        ]));
        return dispatch(commit('modal', !modal));
      }
      return dispatch(commit('modal', !modal));
    }}
    onCancel={() => dispatch(commit('modal', !modal))}
  >
    <Input
      placeholder="请输入该图片描述"
      value={imgModalData.name || ''}
      onChange={e => dispatch(commit('imgModalData', assign({}, imgModalData, { name: e.target.value })))}
    />
  </Modal>
);
ModalComp.propTypes = {
  dispatch: PropTypes.func,
  modal: PropTypes.bool,
  imgs: PropTypes.arrayOf(PropTypes.shape()),
  imgModalData: PropTypes.shape(),
  imgModalIndex: PropTypes.number,
};
export default ModalComp;
