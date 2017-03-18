/**
 * Created by brook on 2017/1/12.
 */
import React, { PropTypes } from 'react';
import { Card, Input } from 'antd';

const styles = {
  imgConfig: {
    width: '100%',
    style: { display: 'block' },
  },
  bodyStyle: {
    padding: 0,
  },
  textStyle: {
    padding: '5px',
  },
  inputBorder: {
    border: 'none',
  },
};

const ImageCard = (props) => {
  const cardWidth = {
    width: props.width || '120px',
    display: 'inline-block',
    margin: '5px',
  };
  return (
    <Card
      style={cardWidth}
      bodyStyle={styles.bodyStyle}
      title={props.title}
    >
      <div>
        <img
          {...styles.imgConfig}
          alt={props.imgName}
          src={props.imgUrl}
        />
      </div>
      <div style={styles.textStyle}>
        <Input
          style={styles.inputBorder}
          value={props.imgName}
          placeholder={'请填写图片描述'}
        />
      </div>
    </Card>
  );
};
ImageCard.propTypes = {
  width: PropTypes.string,
  imgName: PropTypes.string,
  title: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
};
export default ImageCard;
