const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success Call");
    },1000)
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Failure Call");
    },1000);
});

p1.then(console.log);
p2.then(console.log).catch(console.log);

//promise is used to avoid callBack Functions

// Demo Using Call Back without Promise

const v = (val,callBack)=> {
    return callBack(10+val);
};

const callBack = (val)=> {
    return (val+10);
}

console.log(v(1,callBack));

// Demo Using Promise 

const prom = (val)=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(val+10)
    },1000);
});

prom(1).then(x=>x+10).then(console.log);