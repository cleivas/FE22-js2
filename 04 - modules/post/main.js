import {getFormData} from './modules/formhandler.js';
import { postComment, getComments } from './modules/firebase.js';
import { displayComments } from './modules/display.js';


const form = document.querySelector('form');
form.addEventListener('submit', event =>{
    event.preventDefault();

    const comment = getFormData(form);
    postComment(comment)
        .then(getComments)
        .then(displayComments);
});

getComments()
    .then( displayComments );