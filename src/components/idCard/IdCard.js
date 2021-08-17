import React from 'react';
import { SingleIdCard } from './singleIdCard';

class IdCard extends React.Component {
  render() {
    return (
      <div>
        <h1>IdCard</h1>
        <div className="idSection">
          <SingleIdCard />
        </div>
      </div>
    );
  }
}

export { IdCard };