import React, { PropTypes } from 'react';
import { Pagination } from 'antd';

const style = {
  marginTop: '15px',
  display: 'flex',
  justifyContent: 'flex-end',
};

const Page = ({ total, onChange, onShowSizeChange }) => (
  <Pagination
    total={total}
    style={style}
    showSizeChanger showQuickJumper
    onChange={onChange}
    showTotal={records => `共 ${records} 条记录`}
    defaultPageSize={parseInt(localStorage.getItem('goodsListPageSize'), 10) || 10}
    onShowSizeChange={onShowSizeChange}
  />
);

Page.propTypes = {
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onShowSizeChange: PropTypes.func.isRequired,
};

export default Page;
