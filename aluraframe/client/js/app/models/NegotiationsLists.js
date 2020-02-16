// eslint-disable-next-line no-unused-vars
class NegotiationsLists {
    
    constructor() {
        this._negotiations = []
    }

    add(negotiation) {
        this._negotiations.push(negotiation)
    }

    get negotiations() {
        return [].concat(this._negotiations) // método defensivo, retorna uma cópia do array sem alterar o original
    }
}