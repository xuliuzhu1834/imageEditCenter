/**
 * Created by brook on 2017/3/13.
 */
import React, { Component, PropTypes } from 'react';
import { Tag, Tooltip, Input, Button } from 'antd';

class MutiInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: props.data,
      inputVisible: false,
      inputValue: '',
    };
  }
  handleClose(removedTag, callback) {
    const tags = this.props.data.filter(tag => tag !== removedTag);
    this.setState({ tags });
    callback(tags);
  }
  showInput() {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value.trim() });
  }

  handleInputConfirm(callback) {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = this.props.data;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
    callback(tags);
  }
  saveInputRef(input) {
    this.input = input;
    return this.input;
  }
  render() {
    const { inputVisible, inputValue } = this.state;
    return (
      <div>
        {
          this.props.data.map((tag, i) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag key={i} closable afterClose={() => this.handleClose(tag, this.props.onChange)}>
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            );
            return isLongTag ? <Tooltip overlay={'tag'} title={tag} key={i}>{tagElem}</Tooltip> : tagElem;
          })
        }
        {inputVisible && (
          <Input
            ref={input => this.saveInputRef(input)}
            type="text" size="small"
            style={{ width: '30%' }}
            value={inputValue}
            onChange={e => this.handleInputChange(e)}
            onBlur={() => this.handleInputConfirm(this.props.onChange)}
            onPressEnter={() => this.handleInputConfirm(this.props.onChange)}
          />
        )}
        {!inputVisible && <Button size="small" type="dashed" onClick={() => this.showInput()}>+ 创建项目</Button>}
      </div>
    );
  }
}

MutiInput.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
};

export default MutiInput;
