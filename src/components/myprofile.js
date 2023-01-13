import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import '../styles/myProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocket.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved === true);
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="container">
      <div className="container-mission">
        <h1 className="display-6">My Rocket</h1>
        <Table responsive="sm" bordered hover>
          <thead>
            <tr>
              <th>Rocket Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.rocket_name}</td>
              </tr>
            ))}
            {filteredRockets.length === 0 && (
              <tr>
                <td>You have not reserved any rockets yet.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      <div className="container-rocket">
        <h1 className="display-6">My Missions</h1>
        <Table responsive="sm" bordered hover>
          <thead>
            <tr>
              <th>Mission Name</th>
            </tr>
          </thead>
          <tbody>
            {joinedMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
            {joinedMissions.length === 0 && (
              <tr>
                <td>You have not joined any missions yet.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default MyProfile;
