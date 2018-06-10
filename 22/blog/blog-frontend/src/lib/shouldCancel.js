let cancel = process.env.APP_ENV === 'browser' && !!window.__PRELOADED_STATE__;

export const inform = () => {
  cancel = false;
}

export default () => {
  return cancel;
}
