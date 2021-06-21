import mongoose from 'mongoose';


export interface IITenDoc extends mongoose.Document {
    nome: string;
    preco: number;
    modelo: string;
    descricao: string;
    lote:string;
    dataDeInsercao: Date;
    dataDeFabricacao: Date;
    habilitado: boolean;
}
