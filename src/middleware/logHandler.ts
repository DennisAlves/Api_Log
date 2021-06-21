import { Request } from 'express';
import { Log } from '../models/log';
import { Iten } from '../models/iten';

export default class LogHandler {
    public async saveLog(req: Request, type: string, data: any) {
        async function createLog() {
            try {
                const log = {
                    type: type,
                    contentType: req.headers['content-type'],
                    authorization: req.headers.authorization,
                    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
                    method: req.method,
                    providerIdentifier: req.headers.provider_identifier,
                    date: new Date(),
                    bodyContent: JSON.stringify(data),
                };
                await Log.create(log);
            } catch (e) {
                console.log(e);
            }
        }

        switch (type) {
        case 'populate': {
            try {
                const previousState = JSON.stringify(await Iten.find({}))
                const log = {
                    type: type,
                    contentType: req.headers['content-type'],
                    authorization: req.headers.authorization,
                    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
                    method: req.method,
                    providerIdentifier: req.headers.provider_identifier,
                    date: new Date(),
                    previousState: previousState ? previousState : "",
                    bodyContent: JSON.stringify(data),
                };
                await Log.create(log);
            } catch (e) {
                console.log(e);
            }
            break;
        }
        case 'consultar': {
            await createLog()
            break;
        }
        case 'newIten': {
            await createLog()
            break;
        }
        case 'updateIten': {
            try {
                const log = {
                    type: type,
                    contentType: req.headers['content-type'],
                    authorization: req.headers.authorization,
                    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
                    method: req.method,
                    providerIdentifier: req.headers.provider_identifier,
                    date: new Date(),
                    previousState: data,
                    bodyContent: JSON.stringify(req.body),
                };
                await Log.create(log);
            } catch (e) {
                console.log(e);
            }
            break;
        }
        case 'delIten': {
            try {
                const log = {
                    type: type,
                    contentType: req.headers['content-type'],
                    authorization: req.headers.authorization,
                    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
                    method: req.method,
                    providerIdentifier: req.headers.provider_identifier,
                    date: new Date(),
                    previousState: data,
                    bodyContent: JSON.stringify(req.body),
                };
                await Log.create(log);
            } catch (e) {
                console.log(e);
            }
            break;
        }
        default: {
            break;
        }

        }
    }
}
