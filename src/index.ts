import express from "express";
import {AddressInfo} from "net";
import { populateBdRouter } from './router/populateRouter';
import { addIten, consulta, delIten, updateIten } from './router/controlItemRouter';
import { Server } from './dao/server';


const app = express();
app.use(express.json());

async function main(): Promise<void> {

    app.use("/", populateBdRouter);
    app.use("/", consulta);
    app.use("/", addIten);
    app.use("/", updateIten);
    app.use('/', delIten);
}

main()

const server = app.listen(3000, async() => {
    if (server) {
        const dbServer =  await new Server()
        dbServer.connect()
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
        console.error(`Falha ao rodar o servidor.`);
    }
});
