A architecture for writing node.js API, using koa2, koa-router,sequelize

### 基于koa2 sequelize的node.js API架构

**一、整体采用类三层架构，结构文件划分为：**

1.controllers（界面层，对外暴露api接口）

2.core/services（业务逻辑层）

3.core/domain（数据访问层）

4.dtos（数据传输对象）

5.log（日志记录）

6.public（静态文件）

7.test（mocha测试）

8.utils（通用方法库）


**二、使用方法：**

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# run db-create
npm run db-create

# run db-migration
npm run db-migration
```
