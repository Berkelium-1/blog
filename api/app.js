const express = require('express');
const app = express();

app.use(express.json()); // 使用JSON有效负载分析传入请求，并基于body-parser

const prot = 3000; // 端口号

app.listen(prot, () => {
    console.log(`http://localhost:${prot}`);
}).on('request', () => {
    console.log('收到请求');
});