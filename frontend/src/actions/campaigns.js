import { createAction } from 'redux-act'

export const getCampaigns = createAction('getCampaigns');
export const setCampaigns = createAction('setCampaigns');

export const getMyCampaigns = createAction('getMyCampaigns');
export const setMyCampaigns = createAction('setMyCampaigns');

export const getCampaignsById = createAction('getCampaignsById');
export const setCampaignsById = createAction('setCampaignsById');

export const addToMyCards = createAction('addToMyCards');
export const setMyCards = createAction('setMyCards');
export const setMyDownload = createAction('setMyDownload');

export const getLinkForCards = createAction('getLinkForCards');

export const getClubs = createAction('getClubs');
export const setClubs = createAction('setClubs');

export const getMatchAction = createAction('getMatchAction');
export const setMatchAction = createAction('setMatchAction');
