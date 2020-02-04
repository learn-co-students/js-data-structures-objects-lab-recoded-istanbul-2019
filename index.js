// Write your solution in this file!
const driver = {
    name : "nader"
  }
  
  function updateDriverWithKeyAndValue(driver , key , value){
    const newobj = Object.assign({},driver);
    newobj[key] = value;
    return newobj;
  }
  function destructivelyUpdateDriverWithKeyAndValue(driver , key , value){
    driver[key] = value;
    return driver;
  }
  function deleteFromDriverByKey(driver , key){
    const newobj = Object.assign({},driver);
    delete newobj[key];
    return newobj;
  }
  function destructivelyDeleteFromDriverByKey(driver , key){
    delete driver[key];
    return driver;
  }