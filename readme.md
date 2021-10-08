# TodoList App

## 初衷

- 学习react hooks + typescript
- nestJS

## 技术选型

## 演示

## 启动

## task

### server
#### unit
- jwt :heavy_check_mark:
- tpyeorm :heavy_check_mark:
- swagger :heavy_check_mark:
#### 基础api
- login :heavy_check_mark:
- logout (前端)
- register :heavy_check_mark:
    + 做多次用户id不存在的校验 :heavy_check_mark:
    + 用户名不存在的校验
        + 前端校验
        + 后端校验，同时提供给前端校验的接口 :heavy_check_mark:
- add todo :heavy_check_mark:
- delete todo :heavy_check_mark:
- update todo :heavy_check_mark:
- getAll todo :heavy_check_mark:
#### 强化需求
- log日志
- 管道验证 (前后端双重验证)
    - 账户名不能与数据库中已有的重复
    - 账户名min/max length，不能有非法字符(空格)
    - 密码 min/max length，不能有非法字符(空格)
- 错误处理
- JWT鉴权(拦截器，守卫)
- 事务
- cache缓存

### client
#### design
- 拟态
- 响应式
- 按钮悬浮toolTip

- login后，切换user icon为exit icon

- completed后，添加按钮，可以变为remained
- completed后，linethrough
- completed后，改变icon

- 为tooltip加防抖
- 为网络请求加防抖