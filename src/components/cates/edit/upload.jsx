import React from 'react';
import { Upload, Icon, message, Button } from 'antd';
import { commit } from './action';
import styles from './style.css';

const urlSimple = '/admin/upload_image';

const UploadCom = ({
  dispatch,
}) => (
  <div className={styles.downloadList}>
    <div className={styles.downloadCon}>
      <Upload
        name="files[]" action={urlSimple} multiple
        onChange={(info) => {
          if (info.file.status === 'done') {
            message.success(`${info.file.name} 上传成功。`);
            dispatch(commit('value', info.file.response.info.data[0]));
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} 上传失败。`);
          }
        }}
      >
        <Button type="primary" className={styles.upload}>
          <Icon type="upload" /> 点击上传
        </Button>
      </Upload>
    </div>
  </div>
);

UploadCom.propTypes = {
  dispatch: React.PropTypes.func,
};

export default UploadCom;
