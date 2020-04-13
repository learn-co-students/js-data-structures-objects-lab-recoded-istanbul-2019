function updateDriverWithKeyAndValue (driver, key , value){
    const newobj =  Object.assign({}, driver);
    newobj[key]=value;  
    return newobj;  
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
    object[key]=value;
    return object;
}

function deleteFromDriverByKey(driver, key){
    const newobj = Object.assign({}, driver)
    delete newobj[key];
    return newobj;
}

function destructivelyDeleteFromDriverByKey (driver, key){
    delete driver[key];
    return driver;
}
