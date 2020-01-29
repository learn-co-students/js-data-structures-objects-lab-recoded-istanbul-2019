// Write your solution in this file!

const driver = {  };

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

    return driver;
}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver};

    newDriver[key] = value;

    return newDriver;
}


function deleteFromDriverByKey(driver, key) {
  const newDriver = {...driver};

  delete newDriver[key];

  return newDriver;
}

function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key];

  return driver;
}
