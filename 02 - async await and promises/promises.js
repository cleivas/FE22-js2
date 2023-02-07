const myPromise = new Promise((resolve, reject)=>{
    const rand = Math.round(Math.random()*10);

    setTimeout(()=>{
        
    
        if(rand>= 5) resolve(rand);
        else reject('Numret är för litet');
    }, rand*1000);

});

console.log( myPromise );
myPromise
    .then(val => console.log('Promiset är fullfilled med numret', val))
    .catch(error => console.log('Promiset är rejected pga: ', error));


setTimeout(()=>{ console.log('vänta i 3 sekunder')}, 3000);