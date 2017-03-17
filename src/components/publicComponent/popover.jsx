/**
 * Create by liufeng on 2017/1/12
 */
import React from 'react';
import { Popover, Button, Table } from 'antd';

const data = [{
  key: '1',
  name: 'Bag',
  time: '2017-01-12 10:19:00',
  content: 'AAAAA',
  cause: '促销',
}, {
  key: '2',
  name: 'Bag2',
  time: '2017-01-12 10:19:14',
  content: 'AAAA',
  cause: '促销',
}, {
  key: '3',
  name: 'Black',
  time: '2017-01-12 10:19:00',
  content: 'AAAA',
  cause: '促销',
}, {
  key: '4',
  name: 'Black2',
  time: '2017-01-12 10:19:00',
  content: 'BBB',
  cause: '降价',
}, {
  key: '5',
  name: 'Fashion',
  time: '2017-01-12 10:19:00',
  content: 'BBBB',
  cause: '降价',
}, {
  key: '6',
  name: 'Fashion2',
  time: '2017-01-12 10:19:00',
  content: 'BBBB',
  cause: '降价',
}];

const columns = [{
  title: '操作人',
  dataIndex: 'name',
}, {
  title: '时间',
  dataIndex: 'time',
}, {
  title: '修改内容',
  dataIndex: 'content',
}, {
  title: '原因',
  dataIndex: 'cause',
}];

const content = (
  <div>
    <Table dataSource={data} columns={columns} size="small" />
  </div>
);

const PopoverView = () => (
  <div>
    <Popover placement="bottomRight" content={content} trigger="click">
      <Button>操作记录</Button>
    </Popover>
  </div>
);

export default PopoverView;
