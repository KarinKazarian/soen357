import axios from 'axios';

const apiUrl = 'https://besttime.app/api/v1/forecasts';

const makeLiveRequest = async (method, body = {}, params = {}, endpoint) => {
  const options = {
    method: method,
    url: `${apiUrl}/${endpoint}`,
    data: body,
    params: params,
  };

  const response = await axios(options);
  return response;
};
const makeRequest = async (method, body = {}, params = {}) => {
  const options = {
    method: method,
    url: `${apiUrl}`,
    data: body,
    params: params,
  };

  const response = await axios(options);
  return response;
};
const makeGetRequest = async () => {
  return makeRequest('get');
};

const makePostRequest = async (params = {}) => {
  return makeRequest('post', '', params);
};

const makePostRequestLive = async (params = {}) => {
  return makeLiveRequest('post', '', params, 'live');
};

export { makeGetRequest, makePostRequest, makePostRequestLive };
