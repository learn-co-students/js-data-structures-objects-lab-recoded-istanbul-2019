// Write your solution in this file!
const driver={}

function updateDriverWithKeyAndValue(driver,key,value){
return Object.assign({},driver,{[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver[key]=value
  return driver
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key]
  return driver
}

function deleteFromDriverByKey(driver,key){
  let newO = Object.assign({},driver)
  delete newO[key]
  return newO
}


