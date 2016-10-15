'use strict';

import { createStore } from 'redux';
import reducer from 'reducer';
import initContainer from 'container';
import View from 'View';

const view = new View('.game-view');
const store = createStore(reducer);
const updateContainer = initContainer(store.dispatch, store.getState, view);

store.subscribe(updateContainer);