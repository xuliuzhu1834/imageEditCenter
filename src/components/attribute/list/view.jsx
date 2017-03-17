/**
 * Created by brook on 2017/3/10.
 */
import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';
import styles from './style.css';
import { initData } from './action';
import TableView from './tableView';

class AttributeList extends Component {
  constructor(props) {
    super(props);
    props.dispatch(initData());
  }
  render() {
    return (
      <div className={styles.content}>
        <Button
          type="primary" style={{ marginBottom: '20px' }}
          onClick={() => hashHistory.push('/attribute/add')}
        >
          <a><Icon type="plus" /> 添加属性 </a>
        </Button>
        <TableView {...this.props} />
      </div>
    );
  }
}
AttributeList.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = state => state['attribute/list'];

export default connect(mapStateToProps)(AttributeList);
