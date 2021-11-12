import React from 'react';
import PropTypes from 'prop-types';
import './notification.css';

const Notification = ({ message }) => (
  <p className="notification-title">{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;
