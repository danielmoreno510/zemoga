import React from 'react';
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import {Provider, connect} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootSaga from './sagas';
import rootReducer from './reducers';

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

let composed = compose(applyMiddleware(sagaMiddleware));

if (process.env.NODE_ENV !== 'production') {
  // composed = compose(applyMiddleware(logger, sagaMiddleware));
  composed = compose(applyMiddleware(sagaMiddleware));

}

const store = createStore(rootReducer, composed);

export class StoreService {
  static _store: any;

  static setStore(newStore: any) {
    this._store = newStore;
  }

  static connectStore(Component: React.FC) {
    return (props: any) => (
      <Provider store={this._store}>
        <Component {...props} />
      </Provider>
    );
  }

  static connect(mapStateToProps: any, mapDispatchToProps: any, mergeProps: any = undefined) {
    return (Component: React.FC<any>) =>
      this.connectStore(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component));
  }
}

sagaMiddleware.run(rootSaga);
StoreService.setStore(store);