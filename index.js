// Write your solution in this file!
let driver = {}

//1- first and second problem***************************

function updateDriverWithKeyAndValue(obj, key , value){
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}

//2- thrid problem***************************

function destructivelyUpdateDriverWithKeyAndValue(obj , key ,value){
    obj[key] = value;
    return obj;
}

//3- fourth and fifth problem***************************

function deleteFromDriverByKey(obj , key){
    const newObj2 = {... obj}
    delete newObj2[key]
    return newObj2;
}

//4- sixth and seventh problem***************************

function destructivelyDeleteFromDriverByKey(obj , key){
    delete obj[key]
    return obj;
}