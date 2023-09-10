class Store {
  count = 0;
  subscribers = [];
  subscribe(callbackfn){
    this.subscribers.push(callbackfn)
  }
  changeCount(newValue){
    this.count = newValue;
    this.subscribers.forEach(fn => fn(newValue))
  }
  increment(){
    this.changeCount(this.count + 1)
  }
}

export const store = new Store();