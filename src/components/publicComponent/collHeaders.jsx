/**
 *  Created by xuliuzhu on 2017/1/16.
 */
import React, { PropTypes } from 'react';
import { Collapse } from 'antd';

const fontColor = {
  color: '#108ee9',
  transform: 'translateZ(0)',
  fontWeight: 'bold',
};
const styles = { marginBottom: '20px' };

const CollHeaders = props => (
  <Collapse
    defaultActiveKey={['1']}
    style={styles}
  >
    <Collapse.Panel
      key="1"
      header={
        <span style={fontColor}>自定义列表</span>
      }
    >
      {props.children}
    </Collapse.Panel>
  </Collapse>
);
CollHeaders.propTypes = {
  children: PropTypes.element,
};
export default CollHeaders;
