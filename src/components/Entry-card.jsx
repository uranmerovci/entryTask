/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EntryCard = ({ entry, index }) => {
  const time = moment(entry.startedAt * 1000).format('HH:mm:ss DD-MM-YYYY');

  return (
    <Link to={`/${entry.id}`} style={{ textDecoration: 'none' }}>
      <li className="list-group-item list-group-item-action">
        <h5>
          {index + 1}. Started at:  {time}
        </h5>
        <p>
          Distance passed {entry.distance}m for the duration of {entry.durationSeconds}s.
        </p>
      </li>
    </Link>
  );
};

export default EntryCard;
