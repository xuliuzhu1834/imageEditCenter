import React from 'react';
import { Upload, Button, message } from 'antd';
import { upload, commit } from './action';

const inline = {
  display: 'inline-block',
};
const margin = {
  margin: '25px 25px 0 25px',
};

const urlSimple = '/admin/upload_image';
const UploadCom = props => (
  <div style={inline} >
    <Upload
      name="files[]" action={urlSimple} multiple
      showUploadList={false}
      onChange={(info) => {
        if (info.file.status !== 'uploading') {
          props.dispatch(commit('imgLoad', true));
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} 上传成功。`);
          props.dispatch(upload(info.file.response.info.data));
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} 上传失败。`);
          props.dispatch(commit('imgLoad', false));
        }
      }
      }
    >
      <Button icon="upload" type="primary" style={margin}> 点击上传图片 </Button>
    </Upload>
  </div>
);
UploadCom.propTypes = {
  dispatch: React.PropTypes.func,
};

export default UploadCom;
