import React from 'react'
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

export const create = (reducers, initalState) => {
  return createStore(reducers, initalState);
};