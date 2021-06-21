import { Request, Response } from 'express';
import {  Iten } from '../models/iten';
import { ItenViewHelper } from '../viewHelper/ItenViewHelper';
import LogHandler from '../middleware/logHandler';
import { NewItenViewHelper } from '../viewHelper/NewItenViewHelper';


export class ControlItem {

    public async consultar(req: Request, res: Response) {
        try {

            await new LogHandler().saveLog(req,"consultar",req.body)

            const id = req.body.id

            let iten = id ? await Iten.find({_id: id}) : await Iten.find({});

            const formattedIten: ItenViewHelper[] = [];

            iten.forEach((iten) => {
                formattedIten.push(
                    new ItenViewHelper(
                        iten._id,
                        iten.nome,
                        iten.preco,
                        iten.modelo,
                        iten.descricao,
                        iten.lote,
                        iten.dataDeInsercao,
                        iten.dataDeFabricacao,
                        iten.habilitado,
                    ).format(),
                );
            });

            return res.status(201).send(formattedIten);
        } catch (e) {
            console.log(e);
        }
    }
    public async addNewIten(req: Request,res: Response){
        try{
            const iten = new NewItenViewHelper(
                req.body.nome,
                req.body.preco,
                req.body.modelo,
                req.body.descricao,
                req.body.lote,
                req.body.dataDeFabricacao
            ).format()
            await Iten.create(iten)
            await new LogHandler().saveLog(req,"newIten",req.body)
            return res.status(201).send(iten);
        }catch (e) {
            console.log(e);
        }
    }
    public async updateIten(req:Request,res: Response){
        try{
            let prevData
           await Iten.findByIdAndUpdate(req.body.id, req.body.data ,
               function (err, iten) {
                   if (err){
                       console.log(err)
                   }
                   else{
                       prevData = iten;
                   }
               });
            await new LogHandler().saveLog(req,"updateIten",prevData)
            return res.status(201).send(prevData);
        }catch (e) {
            console.log(e);
        }
    }
    public async delIten(req:Request,res: Response){
        try{
            let prevData
            const iten = await Iten.findByIdAndUpdate(req.body.id, {habilitado:false} ,
                function (err, iten) {
                    if (err){
                        console.log(err)
                    }
                    else{
                        prevData = iten;
                    }
                });
            await new LogHandler().saveLog(req,"delIten",prevData)
            return res.status(201).send(iten);
        }catch (e) {
            console.log(e)
        }
    }

}
