import { createReducer } from "redux-act";
import * as a from "../actions/campaigns";

const DEFAULT_STATE = {
  campaigns: [],
  myCards: [],
  campaign: {}
};

export default createReducer(
  {
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
