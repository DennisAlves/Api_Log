import mongoose from 'mongoose';
import { IITenDoc } from './IITenDoc';

const ItemSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },

    modelo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    lote: {
        type: String,
        required: true,
    },
    dataDeInsercao: {
        type: String,
        required: true,
    },
    dataDeFabricacao: {
        type: String,
        required: true,
    },
    habilitado: {
        type: Boolean,
        required: true,
    },
});

const Iten = mongoose.model<IITenDoc>('Iten', ItemSchema);

export { Iten };
