/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Timer;
exports.Timer = (Timer = class Timer {
  constructor (func) {
    this.func = func;
    this.running = false; this.id = null;
    this._handler = () => {
      this.running = false; this.id = null;
      return this.func();
    };
  }

  start (timeout) {
    if (this.running) { clearTimeout(this.id); }
    this.id = setTimeout(this._handler, timeout);
    return this.running = true;
  }

  stop () {
    if (this.running) {
      clearTimeout(this.id);
      this.running = false; return this.id = null;
    }
  }
});

Timer.start = (timeout, func) => setTimeout(func, timeout);