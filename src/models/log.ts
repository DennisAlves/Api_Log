

import mongoose from 'mongoose';
import { ILogDoc } from './ILogDoc';


const LogSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    contentType: {
        type: String,
        default:""
    },
    authorization: {
        type: String,
        default:""
    },
    ip: {
        type: String,
        required: true,
    },
    method: {
        type: String,
        required: true,
    },
    providerIdentifier: {
        type: String,
        default:""
    },
    date: {
        type: Date,
        required: true,
    },
    previousState:{
        type: String,
        default:""
    },
    bodyContent: {
        type: String,
        required: true,
    }

});

const Log = mongoose.model<ILogDoc>('Log', LogSchema);

export { Log };
