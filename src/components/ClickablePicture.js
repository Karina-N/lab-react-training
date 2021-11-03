import React from 'react';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.img,
    };
  }

  changeImage = () => {
    this.setState((prevState) => {
      if (prevState.src === this.props.img) {
        return { src: this.props.imgClicked };
      } else {
        return { src: this.props.img };
      }
    });
  };

  render() {
    return (
      <>
        <img onClick={this.changeImage} src={this.state.src} alt="" />
      </>
    );
  }
}

export { ClickablePicture };
