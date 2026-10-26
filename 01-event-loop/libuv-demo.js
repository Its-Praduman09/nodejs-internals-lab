// fs module Node.js me file read/write karne ke liye hota hai
const fs = require('fs');

console.log('1. JS ne file read karne ka order Libuv ko diya');

// fs.readFile asynchronous hai. JS iska wait nahi karega!
// Ye kaam seedha Libuv ke background me chala gaya.
fs.readFile(__filename, () => {
  console.log('3. Libuv ne background me file read kar li, ab callback chala');
});

console.log('2. JS aage nikal gaya bina ruke');