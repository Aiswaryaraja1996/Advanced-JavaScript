function sleep(delay){
    return new Promise(function(resolve,reject){
        if(typeof delay !== "number"){
            reject("Please pass a number");
        }
        else{
            resolve("Success");
        }
    },delay);
}

sleep(3000).then(function(){
    console.log("slept for 3000ms")
})//if we dont handle the error it will give error
.catch(function(err){
    console.log(err);
});

sleep("M").then(function(){
    console.log("slept for 3000ms")
})//if we dont handle the error it will give error
.catch(function(err){
    console.log(err);
});


// every .then and .catch are promises by itself


setTimeout(function(){
    a(b);

},3000);

function a(callback){
    return setTimeout(function(){
        console.log('a')
        return callback(100);
    },1000)
}

function b(value){
    console.log("value is",value);
}