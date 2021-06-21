import moment from "moment/moment";
moment.locale('pt-br');

export class NewItenViewHelper {
    constructor(
        private nome: string,
        private preco: number,
        private modelo: string,
        private descricao: string,
        private lote: string,
        private dataDeFabricacao: Date,
    ) {}

    public format (): any {
        const iten = {
            nome: this.nome,
            preco: this.preco,
            modelo: this.modelo,
            descricao: this.descricao,
            lote: this.lote,
            dataDeInsercao: new Date(),
            dataDeFabricacao: moment(new Date(this.dataDeFabricacao)).format("DD/MM/YYYY HH:mm:ss"),
            habilitado: true
        }
        return iten
    }
}
