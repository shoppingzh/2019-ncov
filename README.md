# 2019-ncov
2019武汉肺炎数据分析

## client
### 安装与使用
```
npm install
npm run serve
```


## server
基于spring boot的服务端，提供了获取疫情数据的API，支持CORS跨域访问。
**注：此服务端暂没有部署，前端使用jsonp获取新浪新闻的数据**


## ChangeLog
v1.0.0
- 确诊/疑似/死亡/治愈数预览
- 全国数据地图