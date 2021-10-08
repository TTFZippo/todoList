<!--
 * @Author: PacificD
 * @Date: 2021-10-07 12:08:11
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-08 19:04:57
 * @Description: 
-->
# todoList-app
## server
### unit
- jwt
- tpyeorm
- swagger
### 基础api
- login 
- logout (前端)
- register
    + 做多次用户名不存在的校验
- add todo
- delete todo
- update todo
- getAll todo
### 强化需求
- log日志
- 管道验证 (前后端双重验证)
    - 账户名不能与数据库中已有的重复
    - 账户名min/max length，不能有非法字符(空格)
    - 密码 min/max length，不能有非法字符(空格)
- 错误处理
- JWT鉴权(拦截器，守卫)
- 事务
- cache缓存

## client
### design
- 拟态
- 响应式
- 按钮悬浮toolTip

- login后，切换user icon为exit icon

- completed后，添加按钮，可以变为remained
- completed后，linethrough
- completed后，改变icon

- 为tooltip加防抖
- 为网络请求加防抖