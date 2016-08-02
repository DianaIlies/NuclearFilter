import path from 'path';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import proxyRequest from './proxy-requests';
import { staticDirectories, logLevel } from '../build/config/server';


export default function startServer() {
  const app = express();

  app.use(compression());
  app.use(morgan(logLevel));

  staticDirectories.forEach((path) => {
    app.use('/static', express.static(path));
  });

  app.engine('html', require('ejs').renderFile);
  app.set('views', './static');
  app.set('view engine', 'html');

  // API requests
  app.all('/api/*', proxyRequest);

  // Serve index.html for all routes
  app.all('/*', (req, res) => res.render('index'));

  return app;
}
