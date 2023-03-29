const express = require('express');
const app = express();

app.get('/getPdf1', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.sendFile(`${__dirname}/static/1.pdf`);
})
app.get('/getExe1', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.sendFile(`${__dirname}/static/1.exe`);
})
app.get('/getPdf1ByOctet', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  // res.set('Content-Type', 'application/octet-stream');
  // 不设置这个参数，下载的文件名称就是“getPdf1ByOctet”
  res.set('Content-Disposition','attachment;filename=back.pdf');
  res.sendFile(`${__dirname}/static/1.pdf`);
})
app.listen(8000, () => {
  console.log("服务已启动，8000端口监听中...");
})
