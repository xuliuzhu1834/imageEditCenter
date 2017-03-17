/**
 * Created by brook on 2017/3/17.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Input, Select } from 'antd';
import SpaceComponent from '../../publicComponent/spaceComponent';
import WrapperUpload from '../../publicComponent/wrapperUpload';

const width = {
  width: '100%'
}
const CatesAdd = () => (
  <div>
    <SpaceComponent
      data-component1={<span>名称 ：</span>}
      data-span1={2}
      data-component2={
        <Input />
      }
    />
    <SpaceComponent
      data-component1={<span>绑定属性 ：</span>}
      data-span1={2}
      data-component2={
        <Select
          multiple placeholder={'请选择...'}
          style={width}
        >
          <Select.Option value="1"> 1 </Select.Option>
          <Select.Option value="2"> 2 </Select.Option>
        </Select>
      }
    />
    <WrapperUpload
      exportName="图片上传"
      url={'/admin/upload_image'}
    />
  </div>
);

const mapStateToProps = state => state['cates/add'];

export default connect(mapStateToProps)(CatesAdd);
