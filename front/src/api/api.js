// cool file name. did you like it?
import axios from 'axios';

import * as api from '../consts/api';


export const getSeasons = () => axios.get(api.SEASONS);
export const getLeagues = () => axios.get(api.LEAGUES);
export const getMatchById = (id) => axios.get(api.MATCH + id);
export const getMetrics = (match) =>
  axios.get(api.METRIC, {
    params: {
      match: match
    }
  });

export const getMatches = (season, league) =>
  axios.get(api.MATCH, {
    params: {
      season: season,
      league: league
    }
  });

export function getConfigs() {
  return axios.get(api.CONFIGS);
}

export function setConfig(data) {
  return axios.post(api.CONFIGS, data);
}

export function updateConfig(id, data) {
  // console.log(id);
  // console.log(data);
  return axios.put(api.CONFIGS + id + '/', data);
}

export function processMatchs(data) {
  return axios.post(api.BULK_MACTH, data);
}
