import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Select, Row, Col, message, Popconfirm, Button, Spin } from 'antd';
import { commit, getCates, getAttrs, getImg, delImg, delImgFuck, submit } from './action';

import SpaceComponent from '../publicComponent/spaceComponent';
import Star from '../publicComponent/star';
import ImageCard from './imageCard';
import Upload from './upload';
import Modal from './modal';
import styles from './style.css';

const Option = Select.Option;
class Solution extends Component {
  constructor(props) {
    super(props);
    props.dispatch(getCates());
  }
  render() {
    const { cates, attrs, dispatch, imgs, imgLoad, category_id, attribute_id } = this.props;
    return (
      <Spin spinning={imgLoad} >
        <SpaceComponent
          data-component1={<Star text="分类 ：" />}
          data-component2={
            <Select
              className={styles.fullWidth}
              placeholder={'请选择...'}
              onChange={(value) => {
                dispatch(commit('category_id', parseInt(value, 10)));
                return dispatch(getAttrs(parseInt(value, 10)));
              }
              }
            >
              {
                cates.map(v => (
                  <Option key={`${v.id}`}> {v.name} </Option>
                ))
              }
            </Select>
          }
        />
        <SpaceComponent
          data-component1={<Star text="属性 ：" />}
          data-component2={
            <Select
              className={styles.fullWidth}
              placeholder={'请选择...'}
              onChange={(value) => {
                dispatch(commit('attribute_id', parseInt(value, 10)));
                return dispatch(getImg(value));
              }}
            >
              {
                attrs.map(v => (
                  <Option key={`${v.id}`}> {v.name} </Option>
                ))
              }
            </Select>
          }
        />
        <Row>
          <Col style={{ marginTop: '25px' }}>
            {
              imgs.map((v, i) => (
                v.show ?
                  <div className={styles.dispalyStyle} key={i}>
                    <Popconfirm
                      title="确定要删除这张图片吗"
                      onConfirm={() => (v.id ?
                        dispatch(delImg(category_id, attribute_id, v.id, i))
                        : dispatch(delImgFuck(i)))}
                      okText="确定" cancelText="取消"
                    >
                      <Button
                        shape="circle" icon="close"
                        className={styles.close}
                      />
                    </Popconfirm>
                    <ImageCard
                      width={'160px'}
                      imgUrl={v.value}
                      data={v}
                      index={i}
                      imgName={v.name}
                      {...this.props}
                    />
                  </div>
                  : null
              ))
            }
            <Upload {...this.props} />
          </Col>
        </Row>
        <Modal {...this.props} />
        <Button
          type="primary" style={{ margin: '25px' }}
          onClick={() => {
            // TODO: 提交成功 但是接口返回有误
            const addImgs = imgs.filter(v => !v.id && v.show);
            const flag = addImgs.every(v => v.name);
            /* eslint camelcase:0 */
            if (!category_id) {
              return message.warning('请选择分类');
            }
            if (!attribute_id) {
              return message.warning('请选择属性');
            }
            if (flag) {
              return dispatch(submit({
                is_default: 0,
                category_id,
                attribute_id,
                attribute_values: addImgs,
              }));
            }
            return message.warning('请保证每张图片都有描述');
          }}
        >
          提交
        </Button>
      </Spin>
    );
  }
}
Solution.propTypes = {
  dispatch: PropTypes.func,
  category_id: PropTypes.number,
  attribute_id: PropTypes.number,
  attrs: PropTypes.arrayOf(PropTypes.shape()),
  cates: PropTypes.arrayOf(PropTypes.shape()),
  imgs: PropTypes.arrayOf(PropTypes.shape()),
  imgLoad: PropTypes.bool,
};

const mapStateToProps = state => state.solution;

export default connect(mapStateToProps)(Solution);

