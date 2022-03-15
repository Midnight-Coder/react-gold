// eslint-disable-next-line no-underscore-dangle
const _fetch = async (url, { method, ...rest }) => {
  const headers = new Headers([
    ['Accept', 'application/json'],
    ['Access-Control-Allow-Credentials', true],
    ['Access-Control-Allow-Origin', true],
    ['Content-Type', 'application/json']
  ]);

  try {
    const response = await fetch(url, {
      method,
      headers,
      credentials: 'include',
      ...rest
    });
    return await response.json();
  }
  catch (err) {
    /* Catch network/non-API errors */
    return { error: 'Could not establish link with server' };
  }
};

const http = {
  get: async (url) => {
    const response = await _fetch(url, { method: 'GET' });
    return response;
  },

  post: async (url, payload) => {
    const response = await _fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify(payload)
      }
    );
    return response;
  }
};

export default http;
