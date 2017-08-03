#### user-tools
- 使用cnpm install安装依赖

- 使用npm run webpack进行打包

- 使用npm start启动服务

- 最后使用浏览器打开http://localhost:3000
- nodemon自动重启服务器

#### 数据库表：
```
CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name`  varchar(20) DEFAULT NULL,
  `name` varchar(10) DEFAULT NULL,
  `age`  int(11) NOT NULL,
  `sex` char(2) DEFAULT NULL,
  `phonenumber` char(11) NOT NULL,
  `email` varchar(20) DEFAULT NULL,
  `remark` varchar(2000) DEFAULT NULL,  
  PRIMARY KEY (`id`)
); ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
