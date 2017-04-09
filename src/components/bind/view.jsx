import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Select, Button, message } from 'antd';
import { commit, getCates, getAttrs, submit } from './action';
import SpaceComponent from '../publicComponent/spaceComponent';
import Star from '../publicComponent/star';
import styles from './style.css';

const Option = Select.Option;
class Bind extends Component {
  constructor(props) {
    super(props);
    props.dispatch(getCates());
    props.dispatch(getAttrs());
  }
  render() {
    const {
      dispatch, cates, attrs, load, category_id, attribute_ids,
    } = this.props;
    return (
      <div>
        <SpaceComponent
          data-component1={<Star text="分类" />}
          data-component2={
            <Select
              className={styles.fullWidth}
              placeholder={'请选择...'}
              onChange={value => dispatch(commit('category_id', parseInt(value, 10)))}
            >
              {
                cates.map(v => (
                  <Option key={`${v.id}`}> {v.name} </Option>
                ))
              }
            </Select>
          }
        />
        <SpaceComponent
          data-component1={<Star text="属性 ：" />}
          data-component2={
            <Select
              className={styles.fullWidth}
              placeholder={'请选择...'}
              multiple
              onChange={value => dispatch(commit('attribute_ids', value.map(v => parseInt(v, 10))))}
            >
              {
                attrs.map(v => (
                  <Option key={`${v.id}`}> {v.name} </Option>
                ))
              }
            </Select>
          }
        />

        <Button
          type="primary" style={{ margin: '25px' }}
          loading={load}
          onClick={() => {
            /* eslint camelcase:0 */
            if (!category_id) {
              return message.warning('请选择一个分类');
            }
            if (!attribute_ids || attribute_ids.length < 1) {
              return message.warning('请选择一些属性');
            }
            return dispatch(submit({
              category_id,
              attribute_ids,
            }));
          }}
        >
          绑定
        </Button>
      </div>
    );
  }
}

Bind.propTypes = {
  dispatch: PropTypes.func,
  attrs: PropTypes.arrayOf(PropTypes.shape()),
  cates: PropTypes.arrayOf(PropTypes.shape()),
  attribute_ids: PropTypes.arrayOf(PropTypes.number),
  category_id: PropTypes.number,
  load: PropTypes.bool,
};

const mapStateToProps = state => state.bind;

export default connect(mapStateToProps)(Bind);
