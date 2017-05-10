
export function logException(ex, context) {
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
