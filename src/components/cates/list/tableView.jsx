/**
 * Created by brook on 2017/3/10.
 */
import React, { PropTypes } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import { hashHistory } from 'react-router';
import { delCate } from './action';

const TableView = ({
  dispatch,
  dataSource,
  load,
}) => (
  <Table
    dataSource={dataSource}
    loading={load}
    columns={
    [
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '图片',
        dataIndex: 'value',
        render: url => (<img alt="list" src={url} style={{ height: '80px' }} />),
      },
      {
        title: '拥有属性',
        dataIndex: 'attributes',
      },
      {
        title: '操作',
        render: record => (
          <div>
            <Button
              onClick={() => hashHistory.push({
                pathname: '/cates/edit',
                query: record,
              })}
              icon="edit"
            >编辑</Button>
            <Popconfirm
              title="确定要删除吗" okText="确认" cancelText="取消"
              onConfirm={() => dispatch(delCate(record.id))}
            >
              <Button icon="delete" style={{ marginLeft: '25px' }} type="danger" >删除</Button>
            </Popconfirm>
          </div>
        ),
      },
    ]
    }
  />
);
TableView.propTypes = {
  dispatch: PropTypes.func,
  load: PropTypes.bool,
  dataSource: PropTypes.arrayOf(PropTypes.shape()),
};

export default TableView;
