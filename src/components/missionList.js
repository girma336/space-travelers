import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { joinMission, leaveMission } from '../Redux/missionSlice';
import '../styles/missionList.css';

const MissionList = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr>
      <th className="mission-name">{name}</th>
      <td className="mission-description ">{description}</td>
      <td>{reserved ? (<Badge bg="info" className="badge-size">Active Member</Badge>) : (<Badge bg="secondary" className="badge-size">Not A Member</Badge>)}</td>
      <td colSpan={2}>
        { reserved ? (<Button onClick={handleLeaveMission} className="leave-btn badge-size">LeaveMission</Button>) : (
          <Button onClick={handleJoinMission} className="join-btn badge-size">
            <div className="text-wrap">
              JoinMission
            </div>
          </Button>
        )}
      </td>
    </tr>
  );
};

export default MissionList;

MissionList.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
