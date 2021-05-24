import { useEffect, useState } from 'react';
import axios from 'axios';

const API_HOST = 'https://disease.sh/v3/covid-19';

const ENDPOINTS = [
  {
    id: 'USA',
    path: '/countries/USA',
  },
  {
    id: 'CA',
    path: '/states/California',
  },
  {
    id: 'NY',
    path: '/states/New%20york',
  },
  {
    id: 'TX',
    path: '/states/Texas',
  },
  {
    id: 'WA',
    path: '/states/Washington',
  },
  {
    id: 'FL',
    path: '/states/Florida',
  },
];

const defaultState = {
  data: null,
  state: 'ready',
};

const useUSTracker = ({ api = 'states' }) => {
  const [tracker = {}, updateTracker] = useState( defaultState );

  async function fetchTracker() {
    let route = ENDPOINTS.find(({ id } = {}) => id === api );

    if ( !route ) {
      route = ENDPOINTS.find(({ isDefault } = {}) => !!isDefault );
    }

    let response;

    try {
      updateTracker(( prev ) => {
        return {
          ...prev,
          state: 'loading',
        };
      });
      response = await axios.get( `${API_HOST}${route.path}` );
    } catch ( e ) {
      updateTracker(( prev ) => {
        return {
          ...prev,
          state: 'error',
          error: e,
        };
      });
      return;
    }

    const { data } = response;

    updateTracker(( prev ) => {
      return {
        ...prev,
        state: 'ready',
        data,
      };
    });
  }

  useEffect(() => {
    fetchTracker();
  }, [api]);

  return {
    fetchTracker,
    ...tracker,
  };
};

export default useUSTracker;
