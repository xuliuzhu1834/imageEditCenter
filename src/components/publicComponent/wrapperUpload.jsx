/**
 * Create by liufeng on 2017/1/13
 */
import React, { PropTypes } from 'react';
import { Upload, Button, Icon, message } from 'antd';
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

const WrapperUpload = ({
  url,
  downloadName,
  exportName,
  link,
  multiple,
}) => (
  <div className={styles.downloadList}>
    {
      link ?
        <a className={styles.download} href={link}>
          {downloadName}
        </a>
        :
        null
    }
    <div className={styles.downloadCon}>
      <p>{exportName}</p>
      <Upload {...uploadProps(url)} multiple={multiple}>
        <Button type="primary" className={styles.upload}>
          <Icon type="upload" /> 点击上传
        </Button>
      </Upload>
    </div>
  </div>
);

WrapperUpload.propTypes = {
  downloadName: PropTypes.string,
  exportName: PropTypes.string,
  link: PropTypes.string,
  url: PropTypes.string,
  multiple: PropTypes.bool,
};
export default WrapperUpload;
