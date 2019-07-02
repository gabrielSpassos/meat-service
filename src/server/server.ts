import * as restify from "restify";
import {environment} from '../common/environment'
export class Server {

    application: restify.Server;

    initRoutes():Promise<any> {
        return new Promise((resolve, reject) => {
            try{
                this.application = restify.createServer({
                    name: 'meat-service',
                    version: '1.0.0'
                });

                this.application.use(restify.plugins.queryParser());

                this.application.get('/info', [
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

                this.application.listen(environment.server.port, () => {
                    resolve(this.application);
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    bootstrap(): Promise<Server> {
        return this.initRoutes().then(()=>this);
    }
}