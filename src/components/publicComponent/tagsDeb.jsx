/**
 * Created by brook on 2017/2/14.
 */
import React, { Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';
import { AutoComplete, Input } from 'antd';
import $ from 'jquery';

import { searchTags } from '../../lib/database';

class TagsDebComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tags: [],
      dataSource: [],
    };
    this.debounced = debounce(val => this.doChange(val), 800);
    this.dirty = false;
    this.inputId = `db-supplied-${Date.now()}`;
  }
  componentDidUpdate() {
    if (this.dirty) {
      this.dirty = false;
      $(`#${this.inputId}`).click();
    }
  }
  onChange(val) {
    const index = this.state.tags.findIndex(item => item.supplier_name === val);
    if (index > -1) {
      this.props.onChange(this.state.tags[index]);
      this.setState({
        value: this.state.tags[index].supplier_name,
        tags: [],
        dataSource: [],
      });
    } else {
      this.debounced(val);
    }
  }
  doChange(value) {
    this.dirty = true;
    this.dataSource(value, (result) => {
      this.setState({
        value,
        tags: result,
        dataSource: result.map(v => v.supplier_name),
      });
    });
  }
  /* eslint class-methods-use-this:0 */
  dataSource(keywords, cb) {
    searchTags(keywords).then(res => cb(res.info.data));
    // cb([{ id: 1, name: 'zzzz' }, { id: 11, name: 'kkkzzzz' }]);
  }
  render() {
    return (
      <AutoComplete
        value={this.state.value}
        style={{ width: '60%', verticalAlign: 'middle' }}
        onChange={val => this.onChange(val.trim())}
        dataSource={this.state.dataSource}
      >
        <Input id={this.inputId} />
      </AutoComplete>

    );
  }
}

TagsDebComp.propTypes = {
  onChange: PropTypes.func.isRequired,
};

TagsDebComp.defaultProps = {
  onChange: () => {},
};

export default TagsDebComp;
