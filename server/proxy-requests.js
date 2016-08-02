import request from 'request';
import { format } from 'url';
import { apiHostname, protocol } from '../build/config/server';

export default function proxyRequest(req, res) {
  let fwdReq = null;

  const fwdUrl = format({
    protocol,
    slashes: true,
    hostname: apiHostname,
    pathname: req.path,
    query: req.query
  });

  if (req.method.toLowerCase() === 'post') {
    fwdReq = request.post({ uri: fwdUrl, json: req.body });
  } else {
    fwdReq = request(fwdUrl);
  }

  req.pipe(fwdReq).pipe(res);
}
