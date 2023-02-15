function displayDogImages( urlArray ){

    urlArray.forEach(url =>{
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
}

export {displayDogImages};