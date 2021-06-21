import express from "express";
import {PopulateBd} from "../control/populateBd"

export const populateBdRouter = express.Router()

populateBdRouter.post('/populate',new PopulateBd().populate)
