import { getDogImages } from "./modules/fetchdog.js";
import { displayDogImages } from "./modules/displayimages.js";

getDogImages(20)
    .then( displayDogImages );

