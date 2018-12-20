import { put, call } from 'redux-saga/effects'

import {
  BET,
  MATCH,
  MATCH_ACTION,
  MATCH_BY_ID
} from '../constants/api'

import {
  setBets,
  setCampaigns,
  setMatchAction,
  setCampaignsById,
} from '../actions/campaigns'

import { callHttp } from '../utils/api';
import { get, post } from '../utils/httpUtil';
import { toastr } from 'react-redux-toastr';
import * as messageTypes from '../constants/messageTypes';


export function* getCampaigns() {
  try {
    const data = yield callHttp(get, MATCH);
    yield put(setCampaigns(data))
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message))
  }
}

export function* getCampaignsById({ payload }) {
  try {
    const { id } = payload;
    const data = yield callHttp(get, MATCH_BY_ID(id));
    yield put(setCampaignsById(data));
  } catch (err) {
    console.log(err);
    yield put(toastr.error(messageTypes.ERROR, 'Something going wrong'))
  }
}

export function* getBets() {
  try {
    const data = yield callHttp(get, BET);
    yield put(setBets(data))
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message))
  }
}


export function* postBet({ payload }) {
  try {
    const { bet } = payload;
    const data = yield callHttp(post, BET, bet);
    console.log(data)
    // yield put(setCampaignsById(data));
  } catch (err) {
    console.log(err);
    yield put(toastr.error(messageTypes.ERROR, 'Something going wrong'))
  }
}

// export function* addToMyCards({ payload }) {
//   try {
//     const { card } = payload;
//     const data = yield callHttp(get, MATCH_ACTION(id));
//     yield put(setMyCards(card));
//     yield put(toastr.success('Success!', 'Campaigns added!'))
//   } catch (err) {
//     yield put(toastr.error(messageTypes.ERROR, err.message))
//   }
// }


export function* getMatchAction({ payload }) {
  try {
    const { id } = payload;
    const data = yield callHttp(get, MATCH_ACTION);

    yield put(setMatchAction(data.filter(k => k.match === parseInt(id))));
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message))
  }
}

export function* getLinkForCards({ payload }) {
  try {
    console.log('Try to log');
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message))
  }
}
