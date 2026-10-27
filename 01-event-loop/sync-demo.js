// fs (File System) Node.js ka built-in tool hai jo files handle karta hai
const fs = require('fs');

console.log('--- Step 1: Script shuru hui ---');

// fs.readFileSync() ek Synchronous method hai.
// Isko koi callback nahi chahiye.
// __filename ka matlab: "ye wali sync-demo.js file hi read karo" __filename likha thi, wo Node.js ka built-in variable ha
// 'utf-8' ka matlab: file ka data normal text me convert karke do
console.log('--- Step 2: fs.readFileSync call hua (JS yahan freeze ho gaya) ---');

const fileData = fs.readFileSync(__filename, 'utf-8');

// Jab tak poori file read nahi hui, JS niche Step 3 par nahi aayega!
console.log('--- Step 3: File read poori ho gayi! ---');

// Hum file ke pehle 40 characters print kar rahe hain bas dekhne ke liye
console.log('File ka thoda sa content: ' + fileData.slice(0, 40));

console.log('--- Step 4: Script khatam hui ---');

