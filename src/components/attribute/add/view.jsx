/**
 * Created by brook on 2017/3/17.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Input, Row, Col, Button, Popconfirm, message } from 'antd';
import SpaceComponent from '../../publicComponent/spaceComponent';
import WrapperUpload from '../../publicComponent/wrapperUpload';
import ImageCard from '../../publicComponent/imageCard';
import styles from './style.css';

const url = 'http://t1.mmonly.cc/uploads/allimg/150415/22691-m7SNjW.jpg';
const dispalyStyle = {
  display: 'inline-block',
  marginBottom: '25px',
};
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
      data-span1={2}
      data-component1={<span>图片 ：</span>}
      data-component2={
        <WrapperUpload
          exportName="图片上传"
          url={'/admin/upload_image'}
        />
      }
      data-span2={20}
    />
    <Row >
      <Col style={{ marginTop: '25px' }}>
        {
          new Array(10).fill(0).map(() => (
            <div style={dispalyStyle}>
              <Popconfirm
                title="确定要删除这张图片吗"
                onConfirm={() => message.success('yes')}
                onCancel={() => message.warning('no')}
                okText="确定" cancelText="取消"
              >
                <Button
                  shape="circle" icon="close"
                  className={styles.close}
                />
              </Popconfirm>

              <ImageCard
                width={'160px'}
                imgUrl={url}
              />
            </div>
          ))
        }
      </Col>
    </Row>
  </div>

);

const mapStateToProps = state => state['cates/add'];

export default connect(mapStateToProps)(CatesAdd);
