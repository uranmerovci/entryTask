/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

import { saveNewEntry } from '../actions/entries.action';

const EntryForm = (props) => {
  const history = useHistory();

  const [distance, setDistance] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [startedAt, setStartedAt] = useState(moment());
  const [durationSeconds, setDurationSeconds] = useState();
  const [calendarFocused, setCalendarFocused] = useState(false);

  const newEntry = {
    distance: Number(distance),
    latitude,
    longitude,
    startedAt: (startedAt.valueOf() / 1000),
    durationSeconds: Number(durationSeconds),
  };

  const onSaveNewEntry = (event) => {
    event.preventDefault();
    props.saveNewEntry(newEntry);
    history.push('/');
  };

  return (
    <section className="jumbotron ">
      <div className="container " style={{ maxWidth: '40rem', margin: '0 auto' }}>
        <h4>Please fill out the below form with New Entry Details</h4>
        <form onSubmit={onSaveNewEntry} style={{ padding: '20px 200px' }}>
          <div className="form-group">
            <label>
                          Distance
              <input type="number" className="form-control" onChange={(e) => setDistance(e.target.value)} required />
            </label>
          </div>
          <div className="form-group">
            <label>
              Latitude
              <input type="number" className="form-control" onChange={(e) => setLatitude(e.target.value)} />
            </label>
          </div>
          <div className="form-group">
            <label>
              Longitude
              <input type="number" className="form-control" onChange={(e) => setLongitude(e.target.value)} />
            </label>
          </div>
          <div className="form-group">
            <label>
              Started at
              <SingleDatePicker
                date={startedAt}
                onDateChange={(date) => setStartedAt(date)}
                focused={calendarFocused}
                onFocusChange={() => setCalendarFocused(!calendarFocused)}
                numberOfMonths={1}
                showClearDate
                isOutsideRange={() => false}
                id="your_unique_id" // PropTypes.string.isRequired,
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Duration in Seconds
              <input type="number" className="form-control" onChange={(e) => setDurationSeconds(e.target.value)} required />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Add Entry</button>
          <button type="reset" className="btn btn-danger">R Form</button>
        </form>
      </div>
    </section>

  );
};

export default connect(null, { saveNewEntry })(EntryForm);
