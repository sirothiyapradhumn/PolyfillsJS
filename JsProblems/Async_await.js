// normal Promise
const makeReq = (req) => {
    return new Promise((resolve, reject) => {
        if(req === 'GOOGLE') {
            resolve(`Make req to to ${req}`);
        } else {
            reject('Pls visit to GOOGLE');
        }
    })
}

const processReq = (resData) => {
    return new Promise((resolve, reject) => {
        console.log('processReq');
        resolve(`processReq ${resData}`);
    })
}

const helloReq =
makeReq('GOOGLE')
.then((data) => {
    return processReq(data);
}).then((data) => {
    console.log(data);
});



console.log(helloReq);



// async-await
  
const helloReq1 = async() => {
    const res = await makeReq('GOOGLE');
    const anotherReq = await processReq(res);
    console.log(anotherReq);
};


helloReq1();