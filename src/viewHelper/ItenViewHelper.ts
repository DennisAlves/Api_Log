import moment from "moment/moment";
moment.locale('pt-br');

export class ItenViewHelper {
    constructor(
        private id: string,
        private nome: string,
        private preco: number,
        private modelo: string,
        private descricao: string,
        private lote: string,
        private dataDeInsercao: Date,
        private dataDeFabricacao: Date,
        private habilitado: boolean,
    ) {}

    public format (): any {
        const iten = {
             id: this.id,
             nome: this.nome,
             preco: this.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
             modelo: this.modelo,
             descricao: this.descricao,
             lote: this.lote,
             dataDeInsercao: moment(new Date(this.dataDeInsercao)).format("DD/MM/YYYY HH:mm:ss"),
             dataDeFabricacao: moment(new Date(this.dataDeFabricacao)).format("DD/MM/YYYY HH:mm:ss"),
             habilitado: this.habilitado ? "sim":"nao",
        }
        return iten
    }
}
