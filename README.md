![Build Status](https://travis-ci.org/lipeishang/user-tool.svg?branch=master)
## user-tools
#### 简介：
一个基于 Web 的简单数据库维护工具，能够对用户信息（User）进行 CRUD 操作，主要功能有：

1. 有一个能够运行在浏览器中的前端界面
2. 通过 Web API 的方式与后端服务交互
3. 使用 MySQL 作为数据库
4. 用户信息包括：用户名、姓名、年龄、性别、移动电话、电子邮件、备注

#### 启动方式:
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

insert into user_info values(1,"西瓜","李佩赏",23,"女","15829061748","15829061748@163.com","无");
```
