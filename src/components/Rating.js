import React from 'react';

class Rating extends React.Component {
  // state = {
  //   starsList: '\u2606 \u2606 \u2606 \u2606 \u2606',
  // };

  displayRating = (numberOfStars) => {
    numberOfStars = parseFloat(numberOfStars);
    numberOfStars = Math.round(numberOfStars);

    return '★'.repeat(numberOfStars) + '☆'.repeat(5 - numberOfStars);
  };

  render() {
    return (
      <>
        <p>{this.displayRating(this.props.children)}</p>
      </>
    );
  }
}

export { Rating };
