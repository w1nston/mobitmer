import { createStore } from 'redux';
import rootReducer from '../reducers';
import createIpc from 'redux-electron-ipc';
import createLogger from 'redux-logger';

export default function configureStore(state) {
  const ipc = createIpc({
    'channelName': (event, message) => ({ type: 'MAIN_PROCESS_RESPONSE', message }),
  });

  return createStore(
    rootReducer,
    state,
    applyMiddleware(ipc, createLogger())
  );
}
