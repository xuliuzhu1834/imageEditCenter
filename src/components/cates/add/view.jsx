/**
 * Created by brook on 2017/3/17.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Input, Button, message } from 'antd';
import SpaceComponent from '../../publicComponent/spaceComponent';
import Star from '../../publicComponent/star';
import WrapperUpload from './upload';
import ImageCard from './imageCard';
import { commit, submit } from './action';

const CatesAdd = ({
  load,
  name,
  value,
  dispatch,
}) => (
  <div>
    <SpaceComponent
      data-component1={<Star text="名称 ：" />}
      data-span1={2}
      data-component2={
        <Input
          value={name}
          onChange={
            e => dispatch(commit('name', e.target.value))
          }
        />
      }
    />
    <WrapperUpload dispatch={dispatch} />
    {
      value ?
        <div style={{ margin: '25px 0' }}>
          <ImageCard
            imgUrl={value}
            imgName={name}
            width="250px"
          />
        </div>
        :
        null
    }
    <Button
      type="primary"
      loading={load}
      style={{ display: 'block', margin: '25px' }}
      onClick={() => {
        if (!name || !value) {
          return message.warning('请输入名称或者上传图片');
        }
        return dispatch(submit({ name: name.trim(), value: value.trim() }));
      }
      }
    >
      提交
    </Button>
  </div>
);

CatesAdd.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  load: PropTypes.bool,
  dispatch: PropTypes.func,
};
const mapStateToProps = state => state['cates/add'];

export default connect(mapStateToProps)(CatesAdd);
