console.log("This is module");
function avg(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}

// module.exports = avg;

// suppose i want to provide multiple elements then i have to make "module.exports" an object as it is shown below
module.exports = {
    avg:avg,
    name: "Kartik",
    repo: "Github"
}
