// import {get } from './dist/npm/index';
const { get } = require('./dist/npm/index').default;

console.log(get({ name: 'jc' }, 'name'));