const employee = {name: "Jenn", streetAddress: "240 West 73rd"};

function updateEmployeeWithKeyAndValue(obj, key, value){
const newObj = {...obj};
newObj[key] = value;
return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}


function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key]; 
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    obj[key] = value;
    return obj;
}
