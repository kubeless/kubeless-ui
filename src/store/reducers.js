/*
Copyright 2017 Bitnami.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { combineReducers } from 'redux'
import locationReducer from './location'
import alertReducer from './alert'
import funcsReducer from './funcs'
import clustersReducer from './clusters'
import podsReducer from './pods'
import templatesReducer from './templates'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    alert: alertReducer,
    funcs: funcsReducer,
    clusters: clustersReducer,
    pods: podsReducer,
    templates: templatesReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
