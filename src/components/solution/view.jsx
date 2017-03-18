import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Select, Row, Col, message, Popconfirm, Button} from 'antd';
import { initData } from './action';

import SpaceComponent from '../publicComponent/spaceComponent';
import Star from '../publicComponent/star';
import ImageCard from './imageCard';
import Upload from './upload';
import styles from './style.css';

const Option = Select.Option;
const url = 'http://t1.mmonly.cc/uploads/allimg/150415/22691-m7SNjW.jpg';
class Solution extends Component {
  constructor(props) {
    super(props);
    props.dispatch(initData());
  }
  render() {
    return (
      <div>
        <SpaceComponent
          data-component1={<Star text="分类 ：" />}
          data-component2={
            <Select
              className={styles.fullWidth}
              placeholder={'请选择...'}
            >
              <Option key="1">1</Option>
              <Option key="2">2</Option>
            </Select>
          }
        />
        <SpaceComponent
          data-component1={<Star text="属性 ：" />}
          data-component2={
            <Select
              className={styles.fullWidth}
              placeholder={'请选择...'}
            >
              <Option key="1">one</Option>
              <Option key="2">two</Option>
              <Option key="3">three</Option>
              <Option key="4">four</Option>
            </Select>
          }
        />
        <Row>
          <Col style={{ marginTop: '25px' }}>
            {
              new Array(10).fill(0).map((_, i) => (
                <div className={styles.dispalyStyle} key={i} >
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
                    {...this.props}
                  />
                </div>
              ))
            }
            <Upload {...this.props} />
          </Col>
        </Row>
      </div>
    );
  }
}
Solution.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = state => state.solution;

export default connect(mapStateToProps)(Solution);

