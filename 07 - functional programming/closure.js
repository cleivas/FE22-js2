const sayHello = name =>{
    const greeting = `Hello, ${name}`;

    const say = ()=>{
        console.log(greeting);
    }

    return say;
}

console.log( sayHello('Clara') );

const sayHelloToClara = sayHello('Clara');
sayHelloToClara();

const sayHelloToTheClass = sayHello('The Class');
sayHelloToTheClass();

sayHello('Berna')();