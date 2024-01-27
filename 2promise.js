const request=new Promise((resolve, reject) => {
 setTimeout(() =>{
    resolve('Promise intiated');

    console.log('Promise fullfilled');
    
 },1000);
});



console.log(request);

