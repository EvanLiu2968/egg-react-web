## egg-crud接口文档

- [http://www.evanliu2968.com.cn:7001/swagger-ui.html](http://49.232.94.174:7001/swagger-ui.html)

## 本服务API说明

### 接口模型
扩展Controller类，增加四个实例方法用于响应接口，所有参数均为可选
- `this.response(code, body, message)`
- `this.success(body)`
- `this.error(e)`
- `this.deny()`
参考通用接口规范返回类型的设计，最终形成
```javascript
{
  "code": String || '01',
  "message": String,
  "data": JSON || null
}
```
`code`对应`message`如下：
```javascript
{
  '00': '请求成功',
  // 系统异常错误 01-10
  '01': '服务异常',
  // 请求参数错误 11-20
  '11': '请求参数为空',
  '12': '请求参数错误',
  // 权限错误 21-30
  '21': '您尚未登录，请登录后继续操作',
  '22': '您没有权限访问',
  '23': '签名验证错误',
  '24': 'Token已失效',
  '25': 'Session已失效',
  '26': '您的账号在其它地方登录，请重新登录或者修改密码',
  // 预留错误类型 31-50
  '31': '未知错误',
  // 表单/参数校验错误 51+
  '51': '用户信息不存在',
  '52': '用户名已存在',
  '53': '手机号已存在',
  '54': '邮箱已存在',
  '55': '用户未激活',
  '56': '用户未激活',
  '57': '用户已禁用',
  '58': '用户已冻结',
  '59': '用户已注销',
  '61': '用户名或密码错误',
  '62': '验证码错误',
  '63': '两次输入密码不一致',
  '64': '姓名与身份证号码不匹配'
}
```

### 加密接口

> 接口均为post类型，已启用egg-security，需要经过csrfToken验证

#### `/api/photos`

照片列表

#### `/api/articles`

文章列表

#### `/api/articles/:category/:id`

文章详情

#### `/api/subscription/:category/:id`

订阅信息
- /api/subscription/github/${username}
- /api/subscription/music/${listId}
- /api/subscription/zhihu/${username}

#### `/api/dynamic/:category/:id`

动态信息
- /api/dynamic/github/${username}
- /api/dynamic/music/${listId}
- /api/dynamic/zhihu/${username}

#### `/proxy(/.+)?`

代理接口，配置在`config.default.js`
```javascript
config.proxy = {
  '/proxy/github': 'https://api.github.com',
  '/proxy/douban': 'https://api.douban.com/v2',
}
// for example
axios.get('/proxy/github/users/EvanLiu2968/repos')
// the real request action
axios.get('https://api.github.com/users/EvanLiu2968/repos')
```

### 非加密接口

> 接口均为post类型，对外开放
