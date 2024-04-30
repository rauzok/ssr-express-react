import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import App from '../src/components/App';
import rootReducer from "../src/redux/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import parseJSON, { getApiData } from "./helper";
import fs from 'fs';

const store = configureStore({
    reducer: rootReducer,
});

const app = express();
const PORT = process.env.PORT || 9200;
app.use(express.static('build',  { index: false }));

const templatesDir = __dirname + '/';

app.get('*', async (req, res) => {
    try {
        const response = await getApiData(req.url === '/' ? '/users' : req.url);
        store.dispatch({ type: 'ADD', payload: response });

        fs.readFile(templatesDir + 'index.html', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading index.html file:', err);
                return res.status(500).send('Server error');
            }

            const appMarkup = ReactDOMServer.renderToString(
                <StaticRouter location={req.url} context={{}}>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </StaticRouter>
            );

            const title = req.url === '/' ? 'Users' : req.url.split('/')[3];
            const description = 'About ' + (req.url === '/' ? 'Users' : req.url.split('/')[3]);
            const finalHtml = data
                .replace('{{SSR_CONTENT}}', appMarkup)
                .replace('{{PRELOADED_STATE}}', `window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}`)
                .replace('{{TITLE}}', title)
                .replace('{{DESCRIPTION}}', description);

            res.status(200).send(finalHtml);
        });
    } catch (e) {
        console.error('Server error', e);
        res.status(500).send('Server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
