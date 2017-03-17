/**
 * Create by liufeng on 2017/3/8
 */
import React, { Component, PropTypes } from 'react';
import { Popover, Button, Table } from 'antd';
import assign from 'object-assign';
import { under2Camal } from '../../lib/camal';
import fetch from '../../lib/fetch';
  // PRODUCT("0", "product"),
  // TAG("1", "tag"),
  // CATEGOTY("2", "category"),
  // PRODCATE("3", "product_category"),忽略
  // PRODSUPPLY("4", "product_supplier"),
  // IMAGE("5", "image"),
  // SITE("6", "site"),
  // LANGUAGE("7", "language"),
  // ATTRIBUTE("8","attribute"),
  // PRODTYPE("9","product_type");
const columns = [{
  title: '操作人',
  dataIndex: 'operateName',
  width: '80px',
}, {
  title: '时间',
  dataIndex: 'operateTime',
}, {
  title: '修改内容',
  dataIndex: 'content',
}, {
  title: '原因',
  dataIndex: 'reason',
  width: '80px',
}];


const TableContent = dataSource => (
  <div>
    <Table
      dataSource={dataSource}
      columns={columns} size="small"
      pagination={false}
      style={{ width: '700px' }}
    />
  </div>
);
class PopoverView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
  onclick(type, record) {
    return fetch(`/api/gateway/get_operate_logs?type=${type}&key=${record}`, { method: 'GET' })
      .then(
        res => (
          this.setState(
            { dataSource: res.info.data.map((v, i) => under2Camal(assign({}, v, { key: i }))) },
            )
        ),
      );
  }
  render() {
    return (
      <div style={this.props.style} >
        <Popover
          placement="bottomRight"
          content={TableContent(this.state.dataSource)}
          trigger="click"
          arrowPointAtCenter
        >
          <Button
            type="primary"
            onClick={() => this.onclick(this.props.type, this.props.record)}
          >
            操作记录
          </Button>
        </Popover>
      </div>
    );
  }
}
PopoverView.propTypes = {
  type: PropTypes.number.isRequired,
  record: PropTypes.number.isRequired,
  style: PropTypes.shape(),
};

export default PopoverView;
