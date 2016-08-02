import ejs from 'ejs';
import { task } from 'gulp';
import vhost from 'vhost';
import logger from 'morgan';
import { log } from 'gulp-util';
import express from 'express';
import request from 'request';
import compression from 'compression';
import { createServer } from 'http';
import startServer from '../../server/index';
import { proxyPort, hostname } from '../config/server';

task('server', () => {
  let server;
  const app = express();

  app.use(vhost(hostname, startServer()));
  app.use(compression());

  server = createServer(app);

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      log(`Proxy server is already started at port: ${proxyPort}`);
    } else {
      throw err;
    }
  });

  server.listen(proxyPort);
});