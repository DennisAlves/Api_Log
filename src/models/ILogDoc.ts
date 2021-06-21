import mongoose from 'mongoose';


export interface ILogDoc extends mongoose.Document {
    type: string;
    contentType: string;
    authorization: string;
    ip: string;
    method: string;
    providerIdentifier: string;
    date: Date;
    previousState: string
    bodyContent: string;
}
