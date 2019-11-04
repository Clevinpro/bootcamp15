class EventEmitter {
  constructor() {
    this.events = {
    };
  }

  subscribe(type, callBack) {
    if(!this.events[type]) {
      this.events[type] = [];
    }

    this.events[type].push(callBack);
  }

  unsubscribe(type, callBack) {
    if(!this.events[type]) return;
    this.events[type] = this.events[type]
    .filter(el => el !== callBack);
  }

  emit(type, data) {
    if(!this.events[type]) return;

    this.events[type].forEach(cb => {
      cb(data);
    });
  }
}

export default new EventEmitter();
