const { resolve: resolveURL } = require("dns");

module.exports = {
  checkDomain(url) {
    return new Promise((resolve, reject) => {
      resolveURL(url, error => {
        error ? resolve(false) : resolve(true);
      });
    });
  }
};
