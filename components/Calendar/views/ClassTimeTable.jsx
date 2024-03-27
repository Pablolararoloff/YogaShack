// ClassTimeTable.jsx
import React from 'react';

const ClassTimeTable = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="section-title">
            <h2 style={{ color: 'rgb(40, 146, 188)' }}>Class time table</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="timetable-controls">
            <ul>
              <li className="active" data-tsfilter="all">all class</li>
              <li data-tsfilter="Yoga">Yoga</li>
              <li data-tsfilter="Akroyoga">Akroyoga</li>
              <li data-tsfilter="Breathwork">Breathwork</li>
              <li data-tsfilter="Meditation">Meditation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="classtime-table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="workout-time">10:00</td>
              <td className="hover-bg ts-item" data-tsmeta="Yoga">
                <span>10:00 - 14:00</span>
                <h6>Yoga</h6>
              </td>
              <td></td>
              <td className="hover-bg ts-item" data-tsmeta="Yoga">
                <span>10:00 - 15:00</span>
                <h6>Yoga</h6>
              </td>
              <td></td>
              <td className="hover-bg ts-item" data-tsmeta="Akroyoga">
                <span>10:00 - 13:00</span>
                <h6>Akroyoga</h6>
              </td>
              <td></td>
              <td className="hover-bg ts-item" data-tsmeta="Akroyoga">
                <span>10:00 - 13:30</span>
                <h6>Akroyoga</h6>
              </td>
            </tr>
            {/* Repeat for each time slot as needed */}
            <tr>
              <td className="workout-time">14:00</td>
              <td></td>
              <td className="hover-bg ts-item" data-tsmeta="Akroyoga">
                <span>14:00 - 17:00</span>
                <h6>Akroyoga</h6>
              </td>
              <td></td>
              <td className="hover-bg ts-item" data-tsmeta="Yoga">
                <span>14:00 - 17:00</span>
                <h6>Yoga</h6>
              </td>
              <td></td>
              <td className="hover-bg ts-item" data-tsmeta="Meditation">
                <span>14:00 - 15:30</span>
                <h6>Meditation</h6>
              </td>
              <td></td>
            </tr>
            {/* Add more rows for each class time */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassTimeTable;
