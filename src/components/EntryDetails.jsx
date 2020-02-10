/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import { detailedEntry, removeDetailedEntry } from '../actions/detailed.action';


const EntryDetails = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.detailedEntry(id);
    return () => {
      props.removeDetailedEntry();
    };
  }, []);

  if (!props.entry) {
    return <h4>Loadiiing</h4>;
  }

  return (
    <div className="jumbotron">
      <div className="card" style={{ maxWidth: '25rem', margin: '20px auto' }}>
        <div className="card-header ">
          <h4>
            Details for the Entry with ID:
            {props.entry.id}
          </h4>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Distance: </strong>
            {props.entry.distance}
            m
          </li>
          <li className="list-group-item">
            <strong>Latitude: </strong>
            {props.entry.latitude}
          </li>
          <li className="list-group-item">
            <strong>Longtidude: </strong>
            {props.entry.longitude}
          </li>
          <li className="list-group-item">
            <strong>Started at: </strong>
            {moment(props.entry.startedAt * 1000).format('HH:mm:ss DD-MM-YYYY')}
          </li>
          <li className="list-group-item">
            <strong>Duration in seconds: </strong>
            {props.entry.durationSeconds}
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  entries: state.entries,
  entry: state.details.entry,
});
export default connect(mapStateToProps, {
  detailedEntry, removeDetailedEntry,
})(EntryDetails);
