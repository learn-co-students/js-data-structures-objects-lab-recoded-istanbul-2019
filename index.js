const driver = {
  name: 'Sam'
}

///Modify the original driver, but rather returns a clone with the new data
function updateDriverWithKeyAndValue(driver) {
  const newDriver = Object.assign({}, driver, {address: "11 Broadway"});
  
  return newDriver;
}

///Returns the entire updated driver (it is destructive) 
function destructivelyUpdateDriverWithKeyAndValue(driver) {
  driver.address = '12 Broadway'

  return driver;
}

////Deletes `name` from a clone of driver and returns the new driver
function deleteFromDriverByKey(driver){
  const newDriver = Object.assign({}, driver);
  delete newDriver['name'];

  return newDriver;
}

////Returns driver without the delete key/value pair & modifies the original driver
function destructivelyDeleteFromDriverByKey(driver, name){
  delete driver['name'];

  return driver;
}
