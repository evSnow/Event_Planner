
class AccountStorage {
    constructor(){
        this.storage = {};
        this.id=0;
    }

    addAccount({ email, username, password }){
        const id= this.id;
        this.storage[id] = {id, email, username, password };
        this.id++;
    }

    getAccount(){
        return Object.values(this.storage);
    }

    getAccount(id){
        return this.storage[id];
    }
    updateAccount(id, {email, username, password}) {
        this.storage[id] = {id, email, username, password};
    }
    deleteAccount(id){
        delete this.storage[id];
    }
}

module.exports = new AccountStorage();