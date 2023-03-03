import Cookie from '../node_modules/js-cookie/dist/js.cookie.mjs'

Cookie.set('fruit', 'apple', {expires: 2});

const fruitValue = Cookie.get('fruit');
console.log(fruitValue);