/**
 * Created by brook on 2017/3/10.
 */
import React, { PropTypes } from 'react';
import { Table } from 'antd';

const TableView = ({
  dataSource,
}) => (
  <Table
    dataSource={dataSource}
    columns={
    [
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '所在分类',
        dataIndex: 'attributes',
      },
      {
        title: '操作',
      },
    ]
    }
  />
);
TableView.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.shape()),
};

export default TableView;
