
/* test server */
 
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

// @ts-ignore
function logErrors (err, req, res, next) {
    console.error(err.stack)
    next(err)
  }

app.use(logErrors);

app.post('/', (req, res, next) => {
    // console.log('body', req.body);
    // console.log('Accept:', req.headers.accept);
    console.log(req.rawHeaders);
    // console.log(req.rawTrailers);
    const body = <{ thread: number, status: string}> req.body;
    console.log(JSON.stringify(body, null, 4));
    
    res.setHeader('Content-Type', 'text/plain');
    res.status(200);
    res.end('OK');
    res.destroy();
    next();
});

app.get('/', (req, res, next) => {

    console.log('GET /');
    res.setHeader('Content-Type', 'text/plain');
    res.status(200);
    res.end('OK');
    res.destroy();
    next();
});

app.listen(3055, () => {
    console.log(`server started at http://localhost:3055`);
});
