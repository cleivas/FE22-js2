async function getPosts(){
    url = 'https://jsonplaceholder.typicode.com/posts';

    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
}

getPosts();


async function deletePost(index){
    const url = `https://jsonplaceholder.typicode.com/posts/${index}`;

    const response = await fetch(url, {method: 'DELETE'});
    const data = await response.json();

    console.log(data);
}

deletePost(5);

async function addPost(postObj){
    const url = 'https://jsonplaceholder.typicode.com/posts';

    const init = {
        method: 'POST',
        body: JSON.stringify(postObj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }

    const response = await fetch(url, init);
    const post = await response.json();
    console.log(post);
}

const newPost = {
    userId: 3,
    title: 'Aftonbladet',
    body: 'Artikel jag vet inte'
}

addPost(newPost);

async function modifyPost(index, postObj){
    const url = `https://jsonplaceholder.typicode.com/posts/${index}`;

    const init = {
        method: 'PUT',
        body: JSON.stringify(postObj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }

    const response = await fetch(url, init);
    const data = await response.json();
    console.log(data);
}

const replacePost = {
    id: 4,
    title: 'One ring to rule them all',
    body: 'Gandalf',
    userId: 9
}

modifyPost(33, replacePost);


async function patchPost(index, newTitle){
    const url = `https://jsonplaceholder.typicode.com/posts/${index}`;

    const init = {
        method: 'PATCH',
        body: JSON.stringify({title: newTitle}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    };

    const response = await fetch(url, init);
    const data = await response.json();
    console.log(data);
}

patchPost(63, 'King Kong');