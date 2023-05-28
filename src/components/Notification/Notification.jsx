import { NotificationText } from "./Notification.module";
import PropTypes from 'prop-types';


export const Notification = ({ message }) => (
  <NotificationText>{message}</NotificationText>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};