(function(t){function a(a){for(var n,i,s=a[0],c=a[1],l=a[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(a);while(d.length)d.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,s=1;s<e.length;s++){var c=e[s];0!==r[c]&&(n=!1)}n&&(o.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},r={app:0},o=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var l=0;l<s.length;l++)a(s[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"4f76":function(t,a,e){"use strict";var n=e("5644"),r=e.n(n);r.a},5644:function(t,a,e){},"565d":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],i=e("2877"),s={},c=Object(i["a"])(s,r,o,!1,null,null,null),l=c.exports,u=e("8c4f"),p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-image",{attrs:{src:t.logoSrc,fill:"cover",width:"100%",height:"200px"}}),e("div",{staticClass:"container-y"},[e("van-row",{staticClass:"summary",attrs:{type:"flex"}},[e("van-col",{attrs:{span:"6"}},[e("div",{staticClass:"c-red"},[t._v(t._s(t.data.gntotal||"-"))]),e("div",{staticClass:"label"},[t._v("确诊")])]),e("van-col",{attrs:{span:"6"}},[e("div",{staticClass:"c-orange"},[t._v(t._s(t.data.sustotal||"-"))]),e("div",{staticClass:"label"},[t._v("疑似")])]),e("van-col",{attrs:{span:"6"}},[e("div",{staticClass:"c-gray"},[t._v(t._s(t.data.deathtotal||"-"))]),e("div",{staticClass:"label"},[t._v("死亡")])]),e("van-col",{attrs:{span:"6"}},[e("div",{staticClass:"c-green"},[t._v(t._s(t.data.curetotal||"-"))]),e("div",{staticClass:"label"},[t._v("治愈")])])],1)],1),e("div",{staticClass:"container-xy"},[e("div",{staticClass:"card"},[e("van-row",{attrs:{type:"flex"}},[e("div",{staticClass:"container-xy c-blue"},[t._v("疫情地图")])]),e("div",{ref:"chinaMap",staticStyle:{width:"100%",height:"300px"}})],1)])],1)},d=[],f=(e("99af"),e("4160"),e("b0c0"),e("159b"),e("313e")),v=e.n(f),h=e("03d6"),b=e("bc3a"),g=e.n(b),m=g.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).baseURL,timeout:6e4}),y=e("cf05"),_=e.n(y),w={data:function(){return{chinaMap:null,data:{},logoSrc:_.a}},watch:{data:function(t,a){this.renderChart()}},mounted:function(){var t=this;v.a.registerMap("china",h),this.chinaMap=v.a.init(this.$refs.chinaMap),this.chinaMap.setOption({tooltip:{show:!0,backgroundColor:"#fff",borderColor:"#ddd",borderWidth:1,textStyle:{color:"#333"},padding:10,formatter:function(t,a,e){var n=t.data;if(n){var r="\n              <b>".concat(t.name,"</b><br>\n              确诊: ").concat(n.value,"<br>\n              治愈: ").concat(n.cure,"<br>\n              死亡: ").concat(n.death,"\n            ");return r}return"<b>".concat(t.name,"</b><br> 暂无数据")}},visualMap:{type:"piecewise",showLabel:!0,pieces:[{value:0},{gte:1,lte:9},{gte:10,lte:99},{gte:100,lte:499},{gte:500,lte:1e3},{gt:1e3}],right:"10px",bottom:"30%",padding:0,textStyle:{fontSize:10},itemWidth:10,itemHeight:10,itemGap:5}}),m.get("/api/data").then((function(a){var e=a.data;e.success&&(console.log(JSON.parse(e.data).data),t.data=JSON.parse(e.data).data)}))},methods:{renderChart:function(){var t=[];this.data.list.forEach((function(a){t.push({name:a.name,value:parseInt(a.value),sus:parseInt(a.susNum),cure:parseInt(a.cureNum),death:parseInt(a.deathNum)})})),this.chinaMap.setOption({series:[{type:"map",map:"china",zoom:1.1,label:{show:!0,fontSize:8},data:t}]})}}},O=w,x=(e("4f76"),Object(i["a"])(O,p,d,!1,null,"7e1a8e7a",null)),C=x.exports;n["a"].use(u["a"]);var S=[{path:"/",component:C}],j=new u["a"]({mode:"history",base:"/",routes:S}),M=j,N=e("a7fe"),P=e.n(N),E=e("b970");e("157a"),e("565d");n["a"].use(P.a,g.a),n["a"].use(E["a"]),n["a"].config.productionTip=!1,new n["a"]({router:M,render:function(t){return t(l)}}).$mount("#app")},cf05:function(t,a,e){t.exports=e.p+"img/logo.19f50e94.png"}});
//# sourceMappingURL=app.56b74e2e.js.map