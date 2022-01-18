// 'use strict';



// let [user, pass] = decoded.split(':');

// console.log(user, pass);


// // Encryption
// // resource intensive so its used as async

// async function encrypt(password) {

//   let hash = await bcrypt.hash(password, 10); // 10 represents the level of complecity for our hash. Anything beyond 10 will take a long time. It will slow your requests.

//   console.log(hash);

//   let p1 = "aslkdhjga;sgqwe[rriu23958034";
//   let p2 = "q0934ijgnnknq-934h-581t4ihqq";

//   let isP1Valid = await bcrypt.compare(password, p1);
//   let isP2Valid = await bcrypt.compare(password, p2);

//   console.log(isP1Valid);
//   console.log(isP2Valid);
//   console.log(hash);

// }

// encrypt(pass);
