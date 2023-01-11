import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import MissionList from './missionList';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <Table className="table">
      <thead>
        <tr>
          <th className="mission-name">Missions</th>
          <th className="mission-description">Description</th>
          <th className="mission-status">Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionList
            name={mission.mission_name}
            key={mission.mission_id}
            id={mission.mission_id}
            description={mission.mission_description}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default Missions;
