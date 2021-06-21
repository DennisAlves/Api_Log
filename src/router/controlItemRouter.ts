import express from "express";
import {ControlItem} from '../control/controlItem';

export const consulta = express.Router();
export const addIten = express.Router();
export const updateIten = express.Router();
export const delIten = express.Router();

consulta.get('/consulta', new ControlItem().consultar)
addIten.post('/add-iten', new ControlItem().addNewIten)
updateIten.post('/update-iten', new ControlItem().updateIten)
delIten.post('/del-iten', new ControlItem().delIten)
