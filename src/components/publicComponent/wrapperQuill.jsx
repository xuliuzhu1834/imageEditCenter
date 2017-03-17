/**
 * Created by brook on 2017/1/11.
 */
import React, { Component, PropTypes } from 'react';
import Quill from 'quill';


const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }],          // outdent/indent
  [{ direction: 'rtl' }],                         // text direction
  [{ size: ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],          // dropdown with defaults from theme
  ['link', 'image'],
  ['clean'],                                         // remove formatting button
];

const heightStyle = {
  height: '400px',
};
class WrapperQuill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  componentDidMount() {
    /* eslint  no-new: 0 */
    const quill = new Quill(`[data-body-id=${this.props.QuillBodyId}]`, {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: 'snow',
    });
    quill.on('text-change', () => this.setState({ text: quill.getContents().ops }));
  }
  render() {
    return (
      <div
        data-body-id={this.props.QuillBodyId} style={heightStyle}
        data-text={this.state.text}
      />
    );
  }
}

WrapperQuill.propTypes = {
  QuillBodyId: PropTypes.string.isRequired,
};
export default WrapperQuill;

