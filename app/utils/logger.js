import Bugsnag from '@bugsnag/expo';

// const log = (error, details) => Bugsnag.notify(`${error} ${details}`);
const log = (error, details) => console.log(`${error} ${details}`);

const start = () => Bugsnag.start();

export default {
  log, start,
};
