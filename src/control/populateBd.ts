import {Request, Response} from "express";
import { uuid } from 'uuidv4';
import { Iten } from '../models/iten';
import { Server } from '../dao/server';
import LogHandler from '../middleware/logHandler';


export class PopulateBd {

    public async populate(req: Request, res: Response) {
        try{
            const iten = []
            const partsList =[
                {nome: "Microcontroller",descricao:"processador que processa as coisas"},
                {nome: "Transformer",descricao:"transforma uma voltagem em outra voltagem"},
                {nome: "Battery",descricao:"fonte de energia e explosoes"},
                {nome: "Fuse",descricao:"segura a onda quando o eletricista nao faz o seu trabalho direito"},
                {nome: "Relays",descricao:"liga e desliga as coisas"},
                {nome: "Switches",descricao:"tb liga e desliga as coisas mas com o dedo"},
                {nome: "Motors",descricao:"faz as coisas girarem"},
                {nome: "Circuit Breakers",descricao:"desliga as coisas se o eletricista faz merda"},
            ]
            const loteList = []

            for (let i = 0; i < 10; i++){
                loteList.push(Math.floor((Math.random()*5) + 1))
            }

            for (let i = 0; i < 100; i++){
                const partsListSeed = Math.floor(Math.random() * (partsList.length - 1) )
                const loteListSeed = Math.floor(Math.random() * (loteList.length - 1) )
                const mock = {
                    nome: partsList[partsListSeed].nome,
                    preco: Math.floor(Math.random()*10000),
                    modelo: uuid(),
                    descricao: partsList[partsListSeed].descricao,
                    lote: loteList[loteListSeed],
                    dataDeInsercao: new Date(),
                    dataDeFabricacao: new Date(+(new Date()) - Math.floor(Math.random()*10000000000)),
                    habilitado: true
                }
                try {

                     iten.push(mock)

                }catch (e) {
                    console.log(e)
                }
            }
            await new LogHandler().saveLog(req,"populate",iten)
            for (let i = 0; i < iten.length; i++) {
                await Iten.create(iten[i])
            }
            return res.status(201).send(iten);
        }catch (e) {
            console.log(e);
        }
    }
}
