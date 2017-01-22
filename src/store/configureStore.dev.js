import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createIpc from 'redux-electron-ipc';
import createLogger from 'redux-logger';

export default function configureStore(state) {
  const ipc = createIpc({
    'channelName': (event, message) => ({ type: 'MAIN_PROCESS_RESPONSE', message }),
  });

  const store = createStore(
    rootReducer,
    state,
    applyMiddleware(ipc, createLogger())
  );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
