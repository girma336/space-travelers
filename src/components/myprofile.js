import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import '../styles/myProfile.css';

const Myprofile = () => {
  const rocket = useSelector((state) => state.rocket.rockets);
  const renderRocket = rocket.filter((rockets) => rockets.reserved);
  return (
    <div className="container">
      <div className="container-mission">
        <h1 className="display-6">My Rocket</h1>
        <Table responsive="sm" bordered hover>
          <tbody>
            {renderRocket.map((rock) => (
              <tr key={rock.id}>
                <td>{rock.rocket_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="container-rocket">
        <h1>My Missions</h1>
      </div>
    </div>
  );
};
export default Myprofile;
