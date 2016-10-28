import React from 'react';

class EquipmentCard extends React.Component {
  propTypes: {
    numberLeft: React.PropTypes.number,
    equipment: React.PropTypes.string,
    singular: React.PropTypes.string
  }

  render() {
    return (
      <div className="card white-grey darken-1">
        <div className="card-content black-text">
          <div className="card-title title">{this.props.numberLeft}</div>
          <p>{this.props.numberLeft >= 1 ? this.props.equipment : this.props.singular}</p>
        </div>
      </div>
    );
  }
}

export default EquipmentCard;
