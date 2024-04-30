import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from "../redux/rootReducer";
import App from '../components/App';
import { BrowserRouter }  from "react-router-dom";

const preloadedState = window.__PRELOADED_STATE__ || {};

const clientStore = configureStore({
    reducer: rootReducer,
    preloadedState,
});

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={clientStore} serverState={preloadedState}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
