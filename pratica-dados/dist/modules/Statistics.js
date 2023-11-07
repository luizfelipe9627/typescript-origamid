import countBy from "./countBy.js";
function filtrarValor(transacao) {
    return transacao.valor !== null;
}
class Statistics {
    transacoes;
    total;
    pagamento;
    status;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
    }
    setTotal() {
        return (this.transacoes
            .filter(filtrarValor)
            .reduce((acc, { valor }) => {
            return (acc += valor);
        }, 0));
    }
    setPagamento() {
        return countBy(this.transacoes.map(({ pagamento }) => pagamento));
    }
    setStatus() {
        return countBy(this.transacoes.map(({ status }) => status));
    }
}
export default Statistics;
//# sourceMappingURL=Statistics.js.map