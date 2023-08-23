const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");


const app = express();


// 反向代理配置
const proxyOptions = {
  target: "https://www.deepl.com", // 这里是您想要代理的目标服务器地址
  changeOrigin: true, // 修改请求头以适应目标服务器
};


// 设置代理
app.use("/", createProxyMiddleware(proxyOptions));


// 启动服务器
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
