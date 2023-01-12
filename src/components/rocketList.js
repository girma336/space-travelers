import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, removeRocket } from '../Redux/rocketSlice';
import '../styles/rocketList.css';

const RocketList = (props) => {
  const {
    name, description, images, id, reserved,
  } = props;
  const dispatch = useDispatch();

  const handleAddClick = (id) => {
    dispatch(bookRocket(id));
  };
  const handleCancelClick = (id) => {
    dispatch(removeRocket(id));
  };
  return (
    <div className="rocket-list">
      <div className="new-container">
        <div className="media-all">
          <div className="media-le">
            <img src={images} alt="rocket {name}" />
          </div>
          <div className="media-co">
            <h2 className="title">{name}</h2>

            <p className="text-dec">
              {reserved && (
              <span className="btn btn-info btn-sm m-1">Reserved</span>
              )}
              {description}
            </p>
            {reserved ? (
              <button
                type="button"
                onClick={() => handleCancelClick(id)}
                className="btn btn btn-ligth btn-sm m-1"
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleAddClick(id)}
                className="btn btn-primary btn-sm m-1"
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

RocketList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  reserved: PropTypes.bool,
};

RocketList.defaultProps = {
  reserved: false,
};

export default RocketList;
