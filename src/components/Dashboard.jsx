/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import moment from 'moment';

import EntryCard from './Entry-card';
import Pagination from './Pagination';

import { setStartDate, setEndDate } from '../actions/filter.action';

const Dashboard = (props) => {
  const [calendarFocused, setCalendarFocused] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  let entriesfiltered;
  const entriesPerPage = 10;

  if (props.startedAt && props.endedAt) {
    const first = props.entries.filter((entry) => (
      moment(entry.startedAt * 1000).isSameOrAfter(props.startedAt)));
    entriesfiltered = first.filter((entry) => (
      moment(entry.startedAt * 1000).isSameOrBefore(props.endedAt)));
  }

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = entriesfiltered
    ? entriesfiltered.slice(indexOfFirstEntry, indexOfLastEntry)
    : props.entries.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onDateChange = ({ startDate, endDate }) => {
    props.setStartDate(startDate);
    props.setEndDate(endDate);
  };

  const onFocusChange = (calendarFocusedDate) => {
    setCalendarFocused(() => (calendarFocusedDate));
  };

  return (
    <section className="jumbotron text-center" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <h4>
        Entries are sorted by started date (from the earliest), click on them to see detailed info!
        </h4>
        <hr />
        <div className="form-gorup">
          <p>Filter the Entries via the below Calendar</p>
          <DateRangePicker
            startDateId="startDate"
            startDate={props.startedAt}
            endDateId="endDate"
            endDate={props.endedAt}
            onDatesChange={onDateChange}
            focusedInput={calendarFocused}
            onFocusChange={(focusedInput) => onFocusChange(focusedInput)}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates
          />
          <hr />
        </div>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <ul className="list-group">
            {
                            currentEntries.length > 0
                              ? currentEntries.map((entry, index) => <EntryCard key={entry.id} entry={entry} index={index + (currentPage - 1) * 10} />) : <h3 style={{ color: 'red' }}>No Entries were found on the selected Dates</h3>
                        }
          </ul>
          <Pagination
            entriesPerPage={entriesPerPage}
            paginate={paginate}
            totalEntries={props.entries.length}
            entriesfiltered={entriesfiltered}
          />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  entries: state.entries,
  startedAt: state.filtering.startedAt,
  endedAt: state.filtering.endedAt,
  // filteredEntries: selectEntries(state.entries, state.filtering)
});
export default connect(mapStateToProps, { setStartDate, setEndDate })(Dashboard);
