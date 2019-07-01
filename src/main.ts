import * as restify from 'restify'

const server = restify.createServer({
    name: 'meat-service',
    version: '1.0.0'
});

server.use(restify.plugins.queryParser());

server.get('/info', [
    (req, resp, next) => {
        if(req.userAgent() && req.userAgent().includes('MSIE 7.0')) {
            let error:any = new Error();
            error.statusCode = 400;
            error.message = 'Please update your browser';
            return next(error);
        }
        return next();
    }, (req, resp, next) => {
        resp.json({
            browser: req.userAgent(),
            method: req.method,
            url: req.href(),
            path: req.path(),
            query: req.query
        });
        return next();
    }]);

server.listen(3000, () => {
   console.log('Server is running on http://localhost:3000')
});