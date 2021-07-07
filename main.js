const fetch = require("node-fetch");

//utility function
let waitAllToBeResolved = async function(list){
    for(let i = 0; i < list.length; i++){
        list[i] = await list[i];
    }
};

let fetchJson = async function(url){
    //modify the code here to change what will be stored inside the resulting list.
    let response = await fetch(url);
    return await response.json();
};

//main part of the code
let httpList = async function(list){
    let result = list.map(url=>fetchJson(url));
    await waitAllToBeResolved(result);
    return result;
};



let main = async function(){
    let list = await httpList([
        //feel free to change these to any url of an api
        //here I'm using mojang api just for an example.
        "https://api.mojang.com/users/profiles/minecraft/MarsLord27",
        "https://status.mojang.com/check",
        "https://api.mojang.com/users/profiles/minecraft/MarsLord27",
        "https://api.mojang.com/users/profiles/minecraft/MarsLord27",
        "https://api.mojang.com/users/profiles/minecraft/MarsLord27"
    ]);
    console.log("displaying the list of resulting JSON below:\n");
    console.log(list)
};

main();
