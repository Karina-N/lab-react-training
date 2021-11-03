import React from 'react';

class DriverCard extends React.Component {
  displayRating = (numberOfStars) => {
    numberOfStars = parseFloat(numberOfStars);
    numberOfStars = Math.round(numberOfStars);

    return '★'.repeat(numberOfStars) + '☆'.repeat(5 - numberOfStars);
  };

  render() {
    return (
      <div className="driver-card">
        <div>
          <img src={this.props.img} alt={this.props.name + 'photo'} />
        </div>
        <div>
          <h3>{this.props.name}</h3>
          <h3>{this.displayRating(this.props.rating)}</h3>
          <p>{this.props.car.model + ' - ' + this.props.car.licensePlate}</p>
        </div>
      </div>
    );
  }
}

export { DriverCard };
