let instance = null;

export class Socket {
    constructor(){
        if(!instance) { //! this is singleton pattern, to avoid multiple instances of the Socket class
            instance = this;
            console.log("IO Connected !")
        }
        return instance;
    }
}