//deprecated code
/*
const request = require("request");
let requestPromise = function(url,options){
    return new Promise((resolve,reject)=>{
        request(url, options, (err, res, body) => {
            if(err){
                reject(err);
            }else{
                resolve(body);
            }
        });
    });
};
*/



const fetch = require("node-fetch");

let fetchJson = async function(url){
    let response = await fetch(url);
    return await response.json();
};

let waitAllToBeResolved = async function(list){
    for(let i = 0; i < list.length; i++){
        list[i] = await list[i];
    }
};

//main part of the code
let httpList = async function(list){
    let result = list.map(url=>fetchJson(url));
    await waitAllToBeResolved(result);
    return result;
};



let main = async function(){
    let list = await httpList([
        "https://api.mojang.com/users/profiles/minecraft/MarsLord27",
        "https://status.mojang.com/check",
        "https://api.mojang.com/users/profiles/minecraft/MarsLord27",
        "https://api.mojang.com/users/profiles/minecraft/MarsLord27",
        "https://api.mojang.com/users/profiles/minecraft/MarsLord27"
    ]);
    console.log("hi");
    console.log(list)
};

main();
