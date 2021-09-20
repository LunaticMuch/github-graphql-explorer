(async function boot() {
  const React = await import('react');
  const ReactDOM = await import('react-dom');
  const { Voyager } = await import('graphql-voyager');

  function introspection(query) {
    return fetch(`${process.env.API_URL}`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      credentials: 'same-origin',
    })
    .then((response) => response.json());
  }

  ReactDOM.render(
    React.createElement(Voyager, { introspection }),
    document.querySelector('#voyager')
  );
})();
