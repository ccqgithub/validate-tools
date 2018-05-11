import AsyncValidator from 'async-validator';

class Form {
  constructor(opts={}) {
    this.fields = opts.fields;
    this.data = opts.data;
    this.rules = opts.rules || {};

    this.states = {};
    this.updateSates();
  }

  updateSates() {
    let states = {};

    this.fields.forEach(field => {
      states[field] = this.states[field] || {
        status: false,
        message: ''
      }
    });
  }

  validateField() {

  }

  validate() {

  }
}