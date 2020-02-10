/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { modifyCounter, modifyStatus } from '../actions/detailed.action';

let socket;

const CounterInfo = (props) => {
  if (!socket) {
    socket = io('localhost:3031');
  }
  useEffect(() => {
    socket.on('members.new', (res) => {
      props.modifyCounter(res.count);
    });

    socket.on('status.changed', (res) => {
      props.modifyStatus(res.to);
    });

    return () => {
      socket.close();
    };
  }, []);

  const changeStatus = () => {
    socket.emit(props.details.status === 'offline' ? 'status.online' : 'status.offline');
  };

  return (
    <header className="sticky-top bg-info text-center" style={{ minWidth: '40vw' }}>
      <div className="container">
        <h3
          style={{
            margin: '0 auto',
            color: 'white',
            textAlign: 'center',
            fontWeight: '700',
            marginBottom: '20px',
          }}
        >
          Counter members:
          {' '}
          {props.details.counter}
        </h3>
        <h4 style={{ color: 'lightblue' }}>{props.details.status === 'online' ? 'Online' : 'Offline'}</h4>
        <button type="button" className="btn btn-info mb-2" onClick={changeStatus}>Change Status</button>
      </div>
    </header>
  );
};


const mapStateToProps = (state) => ({
  details: state.details,
});

export default connect(mapStateToProps, { modifyCounter, modifyStatus })(CounterInfo);
