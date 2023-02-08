const baseUrl = 'https://fe22-getting-started-default-rtdb.europe-west1.firebasedatabase.app/';

async function getAll(){
    const url = baseUrl + 'posts.json';

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getAll();


async function deleteNode(){
    const url = baseUrl + 'posts/cats/0.json';

    const response = await fetch(url, {method: 'DELETE'});
    const data = await response.json();
    console.log(data);
}

deleteNode();

async function postCat(obj){
    //Allt i urlen som inte finns i databasen från början kommer läggas till
    const url = baseUrl + 'posts/cats/5/test/testigen.json';

    const init = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': "application/json; charset=UTF-8"
        }
    };

    const response = await fetch(url, init);
    const data = await response.json();
    console.log(data);
}

const newCat = {
    id: 44,
    title: 'lion'
}

postCat(newCat);


async function put(obj){
    const url = 'https://fe22-getting-started-default-rtdb.europe-west1.firebasedatabase.app/posts/cats/7.json';

    const init = {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': "application/json; charset=UTF-8"
        }
    };

    const response = await fetch(url, init);
    const data = await response.json();
    console.log(data);
}

const putObj = {
    country: 'SWEDEN',
    school: 'Grit', 
    student: 'Danni'
};
put(putObj);

async function patch(obj){
    const url = 'https://fe22-getting-started-default-rtdb.europe-west1.firebasedatabase.app/posts/cats/5/-NNkcZTQ-cAxFWQQ5nXS.json';

    const init = {
        method: 'PATCH',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': "application/json; charset=UTF-8"
        }
    };

    const response = await fetch(url, init);
    const data = await response.json();
    console.log(data);
}

const patchObj = {
    country: 'Ghana',
};
patch(patchObj);