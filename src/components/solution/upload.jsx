import React from 'react';
import { Upload, Icon, message } from 'antd';
import styles from './style.css';

const uploadProps = url => (
  {
    name: 'file',
    action: url,
    onChange(info) {
      // {
      //   uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
      //     name: 'xx.png'   // 文件名
      //   status: 'done',  // 状态有：uploading done error removed
      //     response: '{"status": "success"}',  // 服务端响应内容
      // }
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功。`);
        console.log('response', info.response);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败。`);
      }
    },
  }
);
const inline = {
  display: 'inline-block',
};
const fontSize = {
  fontSize: '20px',
};

const url = '/admin/upload_image';
const UploadCom = props => (
  <div style={inline} >
    <Upload
      {...uploadProps(url)}
      multiple
    >
      <div className={styles.upload}>
        <Icon type="plus" style={fontSize} />
        <div>上传图片</div>
      </div>
    </Upload>
  </div>
);

export default UploadCom;