// @flow

import { createStructuredSelector } from 'reselect';
import assign from 'lodash/assign';

import { State } from 'models/pagespeed';

// Action Types

// Define types in the form of 'npm-module-or-myapp/feature-name/ACTION_TYPE_NAME'
const ADD_FRIEND = 'redux-app/pagespeed/ADD_FRIEND';
const STAR_FRIEND = 'redux-app/pagespeed/STAR_FRIEND';
const DELETE_FRIEND = 'redux-app/pagespeed/DELETE_FRIEND';

// This will be used in our root reducer and selectors

export const NAME = 'pagespeed';

// Define the initial state for `pagespeed` module

const initialState: State = {
  pagespeed: [0, 1, 2, 3, 4],
  pagespeedById: [
    {
      id: 0,
      name: 'Notorious B.I.G.'
    },
    {
      id: 1,
      name: 'Tupac Shakur'
    },
    {
      id: 2,
      name: 'Dr. Dre'
    },
    {
      id: 3,
      name: 'Big Pun'
    },
    {
      id: 4,
      name: 'Rakim'
    }
  ]
};

// Reducer

/**
 * Another clever approach of writing reducers:
 *
 * export default function(state = initialState, action) {
 *   const actions = {
 *      [ACTION_TYPE]: () => [action.payload.data, ...state]
 *   };
 *
 *   return (_.isFunction(actions[action.type])) ? actions[action.type]() : state
 * }
 */

export default function reducer(state: State = initialState, action: any = {}): State {
  switch (action.type) {
    case ADD_FRIEND: {
      const len = state.pagespeed.length ? state.pagespeed.length : 1;
      const newId = (state.pagespeed[len - 1] + 1) || 0;
      return {
        ...state,
        pagespeed: state.pagespeed.concat(newId),
        pagespeedById: [
          ...state.pagespeedById,
          {
            id: newId,
            name: action.name
          }
        ]
      };
    }

    case DELETE_FRIEND:
      return {
        ...state,
        pagespeed: state.pagespeed.filter((id) => id !== action.id),
        pagespeedById: state.pagespeedById.filter((pagespeed) => pagespeed.id !== action.id)
      };

    case STAR_FRIEND:
      return {
        ...state,
        pagespeedById: state.pagespeedById.map((pagespeed) => {
          if (pagespeed.id !== action.id) {
            return pagespeed;
          }

          return assign({}, pagespeed, {
            starred: !pagespeed.starred
          });
        })
      };

    default:
      return state;
  }
}

// Action Creators

function addPagespeed(name: string) {
  return {
    type: ADD_FRIEND,
    name
  };
}

// or in a form of arrow function

// const addPagespeed = (name: string) => ({
//   type: ADD_FRIEND,
//   name
// });

function deletePagespeed(id: number) {
  return {
    type: DELETE_FRIEND,
    id
  };
}

function starPagespeed(id: number) {
  return {
    type: STAR_FRIEND,
    id
  };
}

// Selectors

const pagespeed = (state) => state[NAME];

export const selector = createStructuredSelector({
  pagespeed
});

export const actionCreators = {
  addPagespeed,
  deletePagespeed,
  starPagespeed
};
