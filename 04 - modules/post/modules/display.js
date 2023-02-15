const container = document.querySelector('#commentsContainer');

function displayComments(comments){
    container.innerHTML = '';

    const commentsArray = Object.values(comments);

    commentsArray.forEach(comment=>{
        createElement('h3', comment.title);
        createElement('p', comment.comment);
        createElement('p', comment.name);
    })
    
    console.log(commentsArray);
}

function createElement(type, text){
    const el = document.createElement(type);
    el.innerText = text;
    container.append(el);
}

export {displayComments};