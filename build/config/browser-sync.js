import { port, hostname, proxyPort } from './server';

export default {
  port,
  host: hostname,
  proxy: `${hostname}:${proxyPort}`,

  open: 'external',
  notify: false,
  ghostMode: false,

  snippetOptions: {
    rule: {
      match: /<\/body>/i,
      fn(snippet, match) {
        return `${snippet}\n${match}`;
      }
    }
  }
}
