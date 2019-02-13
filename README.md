# request

## 参考

[MDN-fetch以及使用方法](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

[fetch以及历史](https://segmentfault.com/a/1190000003810652)

前后数据通信的方式

- [x] 理解 ajax 实现前后端的通信
- [x] 理解 fetch 新的标准实现的通信（理解 promise）
- [] 熟悉 nuxt 框架构建程序特殊的应用异步请求数据
- [x] 微信小程序的token的发送请求完美的封装
- [x] 在框架中使用 axios 发送请求的封装

## fetch 可行性和ajax的缺点，以及异同

### ajax 的缺点

api 的设计没有遵循 Separation of Concerns的原则，导致配置是非常混乱

### fetch 的可行性

阿里和github  全部用上了 fetch，来处理数据请求，在IE8+上都能够正常运行，fetch 是基于 promise 的异步请求

原生的fetch函数的支持在chrome/firefox的版本中已经得到了好的支持，支持率并不高。

IE8+ 兼容处理

1. IE8 是 ES3， 需要引入 ES5 的polyfill: es5-shim, es5-sham
2. Promise 的 polyfill es6-promise
3. 探测库 fetch-detector
探测的时候，看存不存在 window.fetch的方法，没有就使用 XHR实现。但是支持了，但是中文会出现乱码的问题，我们就自己封装了 fetch-detector 和 fetch-ie8
4. fetch 的polyfill： fetch-ie8
5. 可选的还可以使用 jsonp，引入 fetch-jsonp
6. 开启 Babel 的 runtime 模式，现在就使用 async/await

### 异同

错误的http的状态码，Promisen不会标记为 reject（即使404、500），相反会标记为 resolve （resove 的返回值的 ok 属性是 false），只要当网络故障时或请求被阻止时，会被标记为 reject

cookie 的问题， fetch 不会从服务端发送接收任何 cookie，如果站点依赖用于用户 session, 则会导致未经验证的请求（要发送 cookies， 必须设置 credentials）

## 没有对比就没有进步

xhr 实现的请求和 fetch 的对比

## 现代的语法解决的异步的问题

Promise
generator/yield
async/await
