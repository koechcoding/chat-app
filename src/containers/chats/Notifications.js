import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotifications } from '../../redux/actions/notificationActions';

class Notifications extends Component {
  componentDidMount() {
    const { getNotifications } = this.props;
    getNotifications();
  }

  render() {
    const { notifications } = this.props;

    return (
      <div>
        <div className="notifications-heading">
          <h1>Notifications</h1>
        </div>
        {
          notifications && notifications.map(notification => {
            return (
              <p key={notification.id} className="notifications-text"> {notification.content}</p>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications.notifications
})

const mapStateToDispatch = {
  getNotifications
}

export default connect(mapStateToProps, mapStateToDispatch)(Notifications);