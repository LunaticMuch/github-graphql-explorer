(async function boot() {
    const React = await import('react');
    const ReactDOM = await import('react-dom')
    const { default: GraphiQL } = await import('graphiql')

    function graphQLFetcher(graphQLParams, { headers } = {}) {
        console.log(headers);
        return fetch(`${process.env.API_URL}`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `bearer ${process.env.API_TOKEN}`,
                ...headers
            },
            body: JSON.stringify(graphQLParams),
            credentials: 'same-origin'
        })
            .then((response) => response.text())
            .then((responseBody) => {
                try {
                    return JSON.parse(responseBody);
                } catch (error) {
                    return responseBody
                }
            });

    }
    ReactDOM.render(
        React.createElement(GraphiQL, {
            fetcher: graphQLFetcher,
            headerEditorEnabled: true,
            shouldPersistHeaders: true
        }),
        document.querySelector('#graphiql')
    );
})();