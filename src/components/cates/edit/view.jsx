/**
 * Created by brook on 2017/3/17.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Input, Button, message } from 'antd';
import SpaceComponent from '../../publicComponent/spaceComponent';
import Star from '../../publicComponent/star';
import WrapperUpload from './upload';
import ImageCard from './imageCard';
import { commit, submit, initData } from './action';

class CatesEdit extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(commit('origin', props.location.query));
    props.dispatch(initData(props.location.query));
  }
  render() {
    const { load, name, value, dispatch, origin } = this.props;
    return (
      <div>
        <SpaceComponent
          data-component1={<Star text="名称 ：" />}
          data-span1={2}
          data-component2={
            <Input
              value={name}
              onChange={
                e => dispatch(commit('name', e.target.value))
              }
            />
          }
        />
        <WrapperUpload dispatch={dispatch} />
        {
          value ?
            <div style={{ margin: '25px 0' }}>
              <ImageCard
                imgUrl={value}
                imgName={name}
                width="250px"
              />
            </div>
            :
            null
        }
        <Button
          type="primary"
          loading={load}
          style={{ display: 'block', margin: '25px' }}
          onClick={() => {
            if (!name || !value) {
              return message.warning('请输入名称或者上传图片');
            }
            if (origin.name === name.trim() && origin.value === value.trim()) return null;
            return dispatch(submit({
              id: origin.id,
              name: origin.name === name.trim() ? Symbol('no') : name.trim(),
              value: origin.value === value.trim() ? Symbol('no') : value.trim(),
            }));
          }
          }
        >
          提交
        </Button>
      </div>
    );
  }
}

CatesEdit.propTypes = {
  origin: PropTypes.shape(),
  name: PropTypes.string,
  value: PropTypes.string,
  load: PropTypes.bool,
  location: PropTypes.shape(),
  dispatch: PropTypes.func,
};
// export const route = '/:id';
const mapStateToProps = state => state['cates/edit'];

export default connect(mapStateToProps)(CatesEdit);
