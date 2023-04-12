// Client-side store for LightDM structures (user info and available sessions for now)

import { writable } from 'svelte/store';

const initialState = {
  users: [],
  sessions: []
};

const store = writable(initialState);

// Export a function that updates the users variable
export const setUsers = (users) => {
  store.update((state) => ({
    ...state,
    users
  }));
};

// Export a function that updates the sessions variable
export const setSessions = (sessions) => {
  store.update((state) => ({
    ...state,
    sessions
  }));
};

export default store;