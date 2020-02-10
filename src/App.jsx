/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Header from './components/Header';
import CounterInfo from './components/CounterInfo';
import Dashboard from './components/Dashboard';
import EntryForm from './components/EntryForm';
import EntryDetails from './components/EntryDetails';

import { fetchEntries } from './actions/entries.action';

const App = (props) => {
  useEffect(() => {
    props.fetchEntries();
  });

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <CounterInfo />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/addnewEntry" component={EntryForm} />
          <Route path="/:id" component={EntryDetails} />
          <Route path="*" component={Dashboard} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default connect(null, { fetchEntries })(App);
