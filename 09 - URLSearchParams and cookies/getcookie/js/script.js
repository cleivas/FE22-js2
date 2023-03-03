
function getCookieItem(key){
    console.log(document.cookie);

    let value;

    const keyValueArray = document.cookie.split(';');
    console.log(keyValueArray);

    keyValueArray.forEach(pair =>{
        // console.log(pair);
        const trimmed = pair.trim();
        // console.log(trimmed);

        if(trimmed.startsWith(key+'=')){
            // console.log(trimmed);
            const i = trimmed.indexOf('=');
            // console.log(i);
            value = trimmed.substring(i+1, trimmed.length);
            // console.log(value);
        }
    })

    return value;
}

const ageValue = getCookieItem('age');
const nameValue = getCookieItem('name');
console.log(ageValue, nameValue);