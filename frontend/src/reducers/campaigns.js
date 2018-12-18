import { createReducer } from "redux-act";
import * as a from "../actions/campaigns";

const DEFAULT_STATE = {
  campaigns: [],
  myCards: [],
  campaign: {},
  actions: []
};

export default createReducer(
  {
    [a.setMatchAction]: (state, actions) => ({
      ...state,
      actions: actions
    }),
    [a.setCampaigns]: (state, campaigns) => ({
      ...state,
      campaigns: campaigns
    }),
    [a.setCampaignsById]: (state, campaign) => ({
      ...state,
      campaign: campaign
    }),
    [a.setMyCards]: (state, campaign) => ({
      ...state,
      myCards: [...state.myCards, campaign]
    }),
    [a.setMyCampaigns]: (state, campaigns) => ({
      ...state,
      myCards: campaigns
    }),
  },
  DEFAULT_STATE
);
