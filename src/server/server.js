import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import App from '../components/App';
import rootReducer from "../redux/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { getApiData } from "./helper";

const store = configureStore({
    reducer: rootReducer,
});

const app = express();
app.use(express.static('build'));

app.get('*', async (req, res) => {
    try {
        await getApiData(req.url === '/' ? '/users' : req.url).then(response=>
            store.dispatch({type: 'ADD', payload: response.data}));

        const appMarkup = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={{}}>
                <Provider store={store}>
                    <App />
                </Provider>
            </StaticRouter>
        );

        const title = req.url === '/' ? 'Users' : req.url.split('/')[3];
        const description = 'About ' + (req.url === '/' ? 'Users' : req.url.split('/')[3]);

        res.send(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <link rel="icon" href="/favicon.ico">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${title}</title>
                    <meta name="description" content="${description}">
                </head>
                <body>
                    <div id="root">${appMarkup}</div>
                    <script>window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())};</script>
                    <script src="/client.bundle.js"></script>
                </body>
            </html>
        `);
    } catch (e) {
        console.error('Server error', e);
        res.status(500).send('Server error');
    }
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
