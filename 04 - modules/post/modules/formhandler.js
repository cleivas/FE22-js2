function getFormData(form){

    const inputs = form.childNodes;
    const inputData = {};

    inputs.forEach(input => {
        if(input.name != undefined && input.name !=''){
            // console.log(input.name, input.value);
            inputData[input.name] = input.value;
        }
            
    })
    // console.log(inputData);
    return inputData;
    // postComment(inputData);
}

export {getFormData};

