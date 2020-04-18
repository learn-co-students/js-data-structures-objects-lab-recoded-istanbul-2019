

const driver = {
}

function updateDriverWithKeyAndValue(driver, key, value) {
   
    const newDriver = {...driver}
    newDriver[key] = value;
    return newDriver
}


/// ------------- end of  1 --------------------


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key]=value;
    return driver

}


/// ------------- end of  2 --------------------

function deleteFromDriverByKey(driver, key){
   const newDriver = {...driver};
   delete newDriver[key];
   return newDriver
}



/// ------------- end of  3 --------------------



function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver

}



/// ------------- end of  4 --------------------
