import { put, call } from 'redux-saga/effects'

// import {
//   CAMPAIGNS,
//   CAMPAIGNS_BY_ID
// } from '../constants/api'

import {
  setMyCards,
  setCampaigns,
  setMyCampaigns,
  setCampaignsById,
} from '../actions/campaigns'

// import { callHttp } from '../utils/api';
// import { post, get } from '../utils/httpUtil';
import { toastr } from 'react-redux-toastr';
import * as messageTypes from '../constants/messageTypes';
import { campaigns } from '../assets/mock';


export function* getCampaigns() {
  try {
    const data = campaigns;
    // const data = yield callHttp(get, CAMPAIGNS);
    yield put(setCampaigns(data))
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message))
  }
}

export function* getMyCampaigns() {
  try {
    const data = campaigns;
    // const data = yield callHttp(get, CAMPAIGNS);
    yield put(setMyCampaigns(data))
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message))
  }
}

export function* getCampaignsById({ payload }) {
  try {
    const { id } = payload;
    const int_id = parseInt(id);
    const data = campaigns.find(c => c.id === int_id);

    // const data = yield callHttp(get, CAMPAIGNS(id));
    yield put(setCampaignsById(data));
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message))
  }
}

export function* addToMyCards({ payload }) {
  try {
    const { card } = payload;
    // const data = yield callHttp(get, CAMPAIGNS(id));
    yield put(setMyCards(card));
    yield put(toastr.success('Success!', 'Campaigns added!'))
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
