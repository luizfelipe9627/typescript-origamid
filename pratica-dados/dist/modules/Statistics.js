function filtrarValor(transacao) {
    return transacao.valor !== null;
}
class Statistics {
    transacoes;
    total;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
    }
    setTotal() {
        return (this.transacoes
            .filter(filtrarValor)
            .reduce((acc, { valor }) => {
            return (acc += valor);
        }, 0));
    }
}
export default Statistics;
//# sourceMappingURL=Statistics.js.map