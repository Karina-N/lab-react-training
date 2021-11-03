import React from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increaseLikes = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  reduceLikes = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  render() {
    return (
      <>
        <h2 className="likes">{this.state.counter} Likes</h2>
        <button className="likes-button" onClick={this.reduceLikes}>
          -
        </button>
        <button className="likes-button" onClick={this.increaseLikes}>
          +
        </button>
      </>
    );
  }
}

export { LikeButton };
