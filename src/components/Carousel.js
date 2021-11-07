import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          number: 0,
        };
      }

    prevImage = () => {
        this.setState(prevState => {
            if(prevState.number > 0) {
                return {number: prevState.number - 1}
            } else {
                return {number: this.props.imgs.length-1}
            }
        })
    }

    nextImage = () => {
        this.setState(prevState => {
            if(prevState.number < this.props.imgs.length-1) {
                return {number: prevState.number + 1}
            } else {
                return {number: 0}
            }
        })
    }

render() {
    return(
        <div>
        <img src={this.props.imgs[this.state.number]} alt="" />
        <div style={{display:"flex"}}>
            <button onClick={this.prevImage}>Prev</button>
            <button onClick={this.nextImage}>Next</button>
        </div>
        </div>
    );
}
}

export { Carousel };