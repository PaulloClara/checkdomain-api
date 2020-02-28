import { resolve as resolveURL } from "dns";

export function checkDomain(url) {
  return new Promise((resolve, reject) => {
    resolveURL(url, error => {
      error ? resolve(false) : resolve(true);
    });
  });
}
