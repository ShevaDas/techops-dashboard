import React from 'react';

class ContactCard extends React.Component {
  propTypes: {
    name: React.PropTypes.string,
    slackHandle: React.PropTypes.string,
    cell: React.PropTypes.string,
    title: React.PropTypes.string
  }

  render() {
    return (
      <div className="card white-grey darken-1">
        <div className="card-image">
          <img src={this.props.avatar} alt="avatar" />
          <div className="card-title title">{this.props.title}</div>
        </div>
        <div className="card-content black-text">
          <p>{this.props.name}</p>
          <p>Slack: {this.props.slackHandle}</p>
          <p>Cell: {this.props.cell}</p>
        </div>
      </div>
    );
  }
}

export default ContactCard;
