function sleep(delay){
    return new Promise(function(res,rej){
        if(typeof delay !== "number"){
            rej("Not a Number");
            return;
        }
        setTimeout(function(){
            const num = Math.floor(Math.random()*100);
            res(num);
        },delay);
    })
}

//if we dont use try catch it will throw error
async function main(){
    try{
        const response = await sleep("5000");
        console.log(response);
    }
    catch(err){
        console.log("error :" + err);
    }

    try{
        const response = await sleep(5000);
        console.log(response);
    }
    catch(err){
        console.log("error :" + err);
    }
}

main()