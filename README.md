# a标签实现下载操作
文档资料：https://juejin.cn/post/7215477761745928251/

## 功能描述
梳理使用a标签实现下载操作，包含：html a标签实现下载、js 创建a标签实现下载、非同源文件下载。

## 实验依赖
vscode、liver server插件（vscode插件）

## 实验步骤
1. vscode打开一个窗口，选择test文件夹；如图，以open with live server方式启动<http://127.0.0.1:5500/1.html>服务端口，打开1.html;
2. vscode另打开一个窗口，选择test2文件；以open with live server方式启动<http://127.0.0.1:5501/2.html>服务端口，打开2.html
  说明：2.html是空html文件，另起窗口打开test2是借用live server启动一个5501端口的服务，方便模拟非同源下载，即5500端口服务请求下载5501服务的资源。注意：必须另起vscode窗口，同一窗口下html启动的是相同服务。
3. 在<http://127.0.0.1:5500/1.html>浏览器窗口下操作