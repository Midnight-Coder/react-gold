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
  delete: async (url) => _fetch(url, { method: 'DELETE' }),

  get: async (url) => _fetch(url, { method: 'GET' }),

  patch: async (url, payload) => _fetch(url, { method: 'PATCH', body: JSON.stringify(payload) }),

  post: async (url, payload) => _fetch(url, { method: 'POST', body: JSON.stringify(payload) }),

  postFile: async (url, body) => _fetch(url, {
    method: 'POST',
    body,
    otherHeaders: new Headers([
      ['Content-Type', null]
    ])
  }),

  put: async (url, payload) => _fetch(url, { method: 'PUT', body: JSON.stringify(payload) })

};

export default http;
