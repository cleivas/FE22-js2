const date = new Date();
const time = date.getTime() + 2 * 24 * 60 * 60 * 1000;
date.setTime( time )

// console.log(date.toUTCString());

document.cookie = `name=nytt; expires=` + date;
document.cookie = `age=300; expires=` + date;

console.log(document.cookie)