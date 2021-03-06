import * as _ from 'lodash'
import * as express from 'express'
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
// import './controllers/authentication'; // Used for TSOA build
import './controllers/analytic_data';
import * as m from './middleware'
import { RegisterRoutes } from './routes';
import { config } from './config';
import * as path from 'path'

export async function boot() {
  const app = express()
  app.use(helmet())
  app.use(bodyParser.json({defaultCharset: 'utf-8'}))
  app.use(cookieParser(config.secrets.cookie))
  app.use('/docs', express.static(__dirname + '/swagger-ui'));
  app.use('/swagger.json', (req, res) => {
      res.sendFile(__dirname + '/swagger.json');
  });

  RegisterRoutes(app)

  // const publicDistPath = path.join(__dirname, '..', 'client', 'dist')
  // let clientRoutes = ['/portal/', '/portal/login', '/portal/order']
  // _.each(clientRoutes, (route) => {
  //   app.get(route, (req, res) => res.sendFile(path.join(publicDistPath, 'index.html')))
  // })

  // // Repeat
  // const altDistPath = path.join(__dirname, '..', 'kitchen', 'dist')
  // let kithchenRoutes = ['/kitchen/', '/kitchen/nothing', '/kitchen/login']
  // _.each(kithchenRoutes, (route) => {
  //   app.get(route, (req, res) => res.sendFile(path.join(altDistPath, 'index.html')))
  // })


  // // test
  // const testDistPath = path.join(__dirname, '..', 'test', 'dist')
  // let testRoutes = ['/test/', '/test/nothing', '/test/login']
  // _.each(testRoutes, (route) => {
  //   app.get(route, (req, res) => res.sendFile(path.join(testDistPath, 'index.html')))
  // })

  // Error Handler
  app.use(m.errorHandler)

  return app
}

