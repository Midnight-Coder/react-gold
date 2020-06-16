import { SAMPLE } from 'redux/actions/Types';
import sample from 'utils/urlConstants';


export const fetchStatus = () => ({
  type: SAMPLE.FETCH_STATUS,
  url: sample.status
});

export const fetchStatusError = (payload) => ({
  type: SAMPLE.FETCH_STATUS_ERROR,
  payload
});

export const fetchStatusSuccess = (payload) => ({
  type: SAMPLE.FETCH_STATUS_SUCCESS,
  payload
});
