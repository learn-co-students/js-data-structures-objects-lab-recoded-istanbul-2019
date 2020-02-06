// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key, val){
    const newObj = {...driver};
    newObj[key] = val

    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val){
    driver[key] = val;
    
    return driver;
}

const deleteFromDriverByKey = (obj, key, val) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

destructivelyDeleteFromDriverByKey = (obj,key,val) =>{
    delete obj[key];
    return obj;
}
