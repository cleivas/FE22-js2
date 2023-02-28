import { setSize14, setSize30, setSize48 } from "./modules/setsize.js";

const btns = document.querySelectorAll('button');

btns[0].addEventListener('click', setSize14);
btns[1].addEventListener('click', setSize30);
btns[2].addEventListener('click', setSize48);