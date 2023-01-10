import PropTypes from 'prop-types';
import '../styles/rocketList.css';

const RocketList = (props) => {
  const { name, description, images } = props;
  return (
    <div className="rocket-list">
      <div className="new-container">
        <div className="media-all">
          <div className="media-le">
            <img src={images} alt="rocket {name}" />
          </div>
          <div className="media-co">
            <h2 className="title">{name}</h2>
            <p className="text-dec">{description}</p>
            <button type="button" className="btn is-info">Reserve Rocket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

RocketList.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};
export default RocketList;
