import React from 'react';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '/img/dice' + this.randomValue(1, 6) + '.png',
    };
  }

  randomValue = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  changeNumber = () => {
    this.setState(() => {
        return { src: '/img/dice-empty.png' };
    });

    setTimeout(() => {
        this.setState({
            src: '/img/dice' + this.randomValue(1, 6) + '.png'
        })


    },1000);
  };

  render() {
    return (
      <div>
        <img
          onClick={this.changeNumber}
          src={this.state.src}
          alt=""
          style={{ height: '160px' }}
        />
      </div>
    );
  }
}

export { Dice };
