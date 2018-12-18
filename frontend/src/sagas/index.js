import { takeLatest } from 'redux-saga/effects'

import * as authActions from '../actions/auth'
import * as authSagas from './auth'

import * as campaignsActions from '../actions/campaigns'
import * as campaignsSagas from './campaigns'

export default function* saga() {
  const relations = [
    [authActions, authSagas],
    [campaignsActions, campaignsSagas],
  ]

  for (const [actions, sagas] of relations) {
    for (const [actionName, action] of Object.entries(actions)) {
      const saga = sagas[actionName]

      if (saga) yield takeLatest(action.getType(), saga) // for multiple same async requests running at the same time use takeEvery (e.g. nodes for TreeView loading)
    }
  }
}