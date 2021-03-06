import express from 'express';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';

import api from './routes';


const app = express();
const port = 3000;
const devPort = 4000;

/* use session */
app.use(session({
    secret: '@#@$@something$1$234',
    resave: false,
    saveUninitialized: true
}));

app.use('/',express.static(path.join(__dirname,'./../public')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api', api);

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./../public/index.html'));
});

app.listen(port,()=>{
    console.log('Express is listening on port',port);
});

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}