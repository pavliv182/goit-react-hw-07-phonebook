import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Notification = ({ message }) => {
  const { items, isLoading, error } = useSelector(store => store.contacts);

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {!items.length && !isLoading && !error && <p>{message}</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
