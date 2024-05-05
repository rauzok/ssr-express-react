export const getPreloadedState = () => {
    const preloadedState = window.__PRELOADED_STATE__ || {};
    const scriptState = document.getElementById('preloadState');

    scriptState && document.body.removeChild(scriptState);

    return preloadedState;
}
