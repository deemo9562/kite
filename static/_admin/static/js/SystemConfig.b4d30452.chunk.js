(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[21],{544:function(e,a,t){},566:function(e,a,t){"use strict";t.r(a);t(424);var l=t(426),n=(t(173),t(56)),c=t(116),i=t(12),s=t(0),r=t.n(s),m=t(66),o=(t(114),t(113)),u=(t(354),t(355)),d=(t(350),t(351)),b=(t(175),t(58)),p=b.a.Option,E=function(e){var a=d.a.useForm(),t=Object(i.a)(a,1)[0],l={wrapperCol:{offset:8,span:16}},n=Object(s.useState)({type:""}),E=Object(i.a)(n,2),f=E[0],g=E[1],h=Object(s.useState)(!1),y=Object(i.a)(h,2),v=y[0],O=y[1];console.log("props",e),Object(s.useEffect)((function(){t.setFieldsValue(Object(c.a)({},e.email))}),[t,e.email]);var j=function(a){m.a.post("/system-config/update",{type:"email",email:Object(c.a)({},a)}).then((function(a){e.getSystemConfigInfo(),O(!1)}))};return r.a.createElement("div",{className:"card layout-card-view"},r.a.createElement("div",{className:"layout-main-title"},r.a.createElement("h4",{className:"header-title"},"\u90ae\u7bb1\u4fee\u6539or\u7ed1\u5b9a")),r.a.createElement("div",{className:"config-main"},r.a.createElement(d.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{name:"basic",form:t,initialValues:{remember:!0},onFinish:function(e){j(e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(d.a.Item,{name:"type",label:"\u7cfb\u7edf\u7c7b\u578b",rules:[{required:!0}]},r.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u7cfb\u7edf\u7c7b\u578b\uff01",onChange:function(e){g(Object(c.a)({},f,{type:e}))},allowClear:!0,disabled:!v},r.a.createElement(p,{value:"company"},"\u4f01\u4e1a"),r.a.createElement(p,{value:"personal"},"\u4e2a\u4eba"))),r.a.createElement(d.a.Item,{label:"\u7cfb\u7edf\u90ae\u7bb1",name:"user",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7cfb\u7edf\u90ae\u7bb1\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!v})),"company"===f.type?r.a.createElement("div",null,r.a.createElement(d.a.Item,{label:"\u670d\u52a1\u5546\u670d\u52a1\u5668\u5730\u5740",name:"host",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u670d\u52a1\u5546\u670d\u52a1\u5668\u5730\u5740\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!v,placeholder:"\u670d\u52a1\u5668\u5730\u5740"})),r.a.createElement(d.a.Item,{label:"\u7cfb\u7edf\u90ae\u7bb1\u670d\u52a1\u5546\u7aef\u53e3",name:"port",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7cfb\u7edf\u90ae\u7bb1\u670d\u52a1\u5546\u7aef\u53e3\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!v,placeholder:"\u670d\u52a1\u5546\u7aef\u53e3"}))):"","company"!==f.type?r.a.createElement(d.a.Item,{label:"\u7cfb\u7edf\u90ae\u7bb1\u670d\u52a1\u5546\u540e\u7f00",name:"service",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1\u670d\u52a1\u5546\u540e\u7f00\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!v,placeholder:"\uff08\u4f8b\u5982\uff1aqq\u3001163\u7b49\u7b49\uff09"})):"",r.a.createElement(d.a.Item,{label:"\u7cfb\u7edf\u90ae\u7bb1\u5bc6\u7801",name:"pass",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1\u5bc6\u7801\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!v,type:"password",placeholder:"\u90ae\u7bb1\u5bc6\u7801"})),r.a.createElement(d.a.Item,l,v?r.a.createElement("div",null,r.a.createElement(o.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58"),r.a.createElement(o.a,{onClick:function(){O(!1)}},"\u53d6\u6d88")):r.a.createElement(o.a,{type:"primary",onClick:function(){O(!0)}},"\u4fee\u6539")))))},f=function(e){var a=d.a.useForm(),t=Object(i.a)(a,1)[0],l={wrapperCol:{offset:8,span:16}},n=Object(s.useState)(!1),b=Object(i.a)(n,2),p=b[0],E=b[1];console.log("props",e),Object(s.useEffect)((function(){t.setFieldsValue(Object(c.a)({},e.website))}),[t,e.website]);var f=function(a){m.a.post("/system-config/update",{type:"website",website:Object(c.a)({},a)}).then((function(a){e.getSystemConfigInfo(),E(!1)}))};return r.a.createElement("div",{className:"card layout-card-view"},r.a.createElement("div",{className:"layout-main-title"},r.a.createElement("h4",{className:"header-title"},"\u7f51\u7ad9\u914d\u7f6e")),r.a.createElement("div",{className:"config-main"},r.a.createElement(d.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{name:"basic",form:t,initialValues:{remember:!0},onFinish:function(e){f(e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(d.a.Item,{label:"\u7f51\u7ad9\u540d",name:"website_name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7f51\u7ad9\u540d\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!p,placeholder:"\u7f51\u7ad9\u540d"})),r.a.createElement(d.a.Item,{label:"logo\u5730\u5740",name:"logo",rules:[{message:"\u8bf7\u8f93\u5165logo\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!p,placeholder:"logo"})),r.a.createElement(d.a.Item,{label:"\u57df\u540d",name:"domain_name",rules:[{message:"\u8bf7\u8f93\u5165\u57df\u540d\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!p,placeholder:"\u57df\u540d"})),r.a.createElement(d.a.Item,{label:"\u7f51\u7ad9\u4ecb\u7ecd",name:"introduction",rules:[{message:"\u8bf7\u8f93\u5165\u7f51\u7ad9\u4ecb\u7ecd\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!p,placeholder:"\u7f51\u7ad9\u4ecb\u7ecd"})),r.a.createElement(d.a.Item,{label:"\u7f51\u7ad9\u5173\u952e\u8bcd",name:"keywords",rules:[{message:"\u8bf7\u8f93\u5165\u7f51\u7ad9\u5173\u952e\u8bcd\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!p,placeholder:"\u7f51\u7ad9\u5173\u952e\u8bcd"})),r.a.createElement(d.a.Item,{label:"\u7f51\u7ad9\u63cf\u8ff0",name:"description",rules:[{message:"\u8bf7\u8f93\u5165\u7f51\u7ad9\u63cf\u8ff0\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!p,placeholder:"\u7f51\u7ad9\u4ecb\u7ecd"})),r.a.createElement(d.a.Item,{label:"\u5907\u6848\u53f7",name:"miibeian",rules:[{message:"\u8bf7\u8f93\u5165\u5907\u6848\u53f7\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!p,placeholder:"\u5907\u6848\u53f7"})),r.a.createElement("h3",{className:"title"},"\u4fa7\u680f\u5e95\u90e8\u4fe1\u606f"),r.a.createElement(d.a.Item,{label:"\u5173\u4e8e",name:"about",rules:[{message:"\u8bf7\u8f93\u5165\u5173\u4e8e\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!p,placeholder:"\u5173\u4e8e"})),r.a.createElement(d.a.Item,{label:"\u5efa\u8bae\u53cd\u9988",name:"feedback",rules:[{message:"\u8bf7\u8f93\u5165\u5efa\u8bae\u53cd\u9988\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!p,placeholder:"\u5efa\u8bae\u53cd\u9988"})),r.a.createElement(d.a.Item,l,p?r.a.createElement("div",null,r.a.createElement(o.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58"),r.a.createElement(o.a,{onClick:function(){E(!1)}},"\u53d6\u6d88")):r.a.createElement(o.a,{type:"primary",onClick:function(){E(!0)}},"\u4fee\u6539")))))},g=b.a.Option,h=function(e){var a=d.a.useForm(),t=Object(i.a)(a,1)[0],l={wrapperCol:{offset:8,span:16}},n=Object(s.useState)(!1),p=Object(i.a)(n,2),E=p[0],f=p[1];console.log("props",e),Object(s.useEffect)((function(){t.setFieldsValue(Object(c.a)({},e.config))}),[t,e.config]);var h=function(a){m.a.post("/system-config/update",{type:"config",config:Object(c.a)({},a)}).then((function(a){e.getSystemConfigInfo(),f(!1)}))};return r.a.createElement("div",{className:"card layout-card-view"},r.a.createElement("div",{className:"layout-main-title"},r.a.createElement("h4",{className:"header-title"},"\u7f51\u7ad9\u529f\u80fd")),r.a.createElement("div",{className:"config-main"},r.a.createElement(d.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{name:"basic",form:t,initialValues:{remember:!0},onFinish:function(e){h(e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(d.a.Item,{label:"\u5f00\u542f\u767b\u5f55",name:"on_login",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u662f\u5426\u5f00\u542f\u767b\u5f55\uff01",whitespace:!0}]},r.a.createElement(b.a,{disabled:!E},r.a.createElement(g,{value:"yes"},"\u5f00\u542f"),r.a.createElement(g,{value:"no"},"\u5173\u95ed"))),r.a.createElement(d.a.Item,{label:"\u5f00\u542f\u6ce8\u518c",name:"on_register",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u662f\u5426\u5f00\u542f\u6ce8\u518c\uff01",whitespace:!0}]},r.a.createElement(b.a,{disabled:!E},r.a.createElement(g,{value:"yes"},"\u5f00\u542f"),r.a.createElement(g,{value:"no"},"\u5173\u95ed"))),r.a.createElement(d.a.Item,{label:"\u5f00\u542f\u8bc4\u8bba\u6a21\u5757",name:"on_comment",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u662f\u5426\u5f00\u542f\u8bc4\u8bba\u6a21\u5757\uff01",whitespace:!0}]},r.a.createElement(b.a,{disabled:!E},r.a.createElement(g,{value:"yes"},"\u5f00\u542f"),r.a.createElement(g,{value:"no"},"\u5173\u95ed"))),r.a.createElement(d.a.Item,{label:"\u540e\u53f0\u7ba1\u7406\u754c\u9762\u8bbf\u95ee\u5730\u5740",name:"admin_url",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540e\u53f0\u7ba1\u7406\u754c\u9762\u8bbf\u95ee\u5730\u5740\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!E,placeholder:"\u540e\u53f0\u7ba1\u7406\u754c\u9762\u8bbf\u95ee\u5730\u5740"})),r.a.createElement(d.a.Item,{label:"google\u7edf\u8ba1code",name:"googleCode",rules:[{message:"\u8bf7\u8f93\u5165google\u7edf\u8ba1code\uff01",whitespace:!0}]},r.a.createElement(u.a,{disabled:!E,placeholder:"google\u7edf\u8ba1code"})),r.a.createElement(d.a.Item,{label:"\u5f00\u542f\u767e\u5ea6\u81ea\u52a8\u63a8\u9001",name:"isBaiduAuthPush",rules:[{message:"\u8bf7\u9009\u62e9\u662f\u5426\u5f00\u542f\u767e\u5ea6\u81ea\u52a8\u63a8\u9001\uff01",whitespace:!0}]},r.a.createElement(b.a,{disabled:!E},r.a.createElement(g,{value:"yes"},"\u5f00\u542f"),r.a.createElement(g,{value:"no"},"\u5173\u95ed"))),r.a.createElement(d.a.Item,l,E?r.a.createElement("div",null,r.a.createElement(o.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58"),r.a.createElement(o.a,{onClick:function(){f(!1)}},"\u53d6\u6d88")):r.a.createElement(o.a,{type:"primary",onClick:function(){f(!0)}},"\u4fee\u6539")))))},y=(t(182),t(64)),v=(t(183),t(15)),O=(t(360),t(334)),j=function(e){var a=e.oauth,t={wrapperCol:{offset:8,span:16}},l=d.a.useForm(),n=Object(i.a)(l,1)[0],c=Object(s.useState)({oauths:[""]}),b=Object(i.a)(c,2),p=b[0],E=b[1],f=Object(s.useState)(!1),g=Object(i.a)(f,2),h=g[0],j=g[1],w=Object(s.useCallback)((function(e){E({oauths:e})}),[]);Object(s.useEffect)((function(){n.setFieldsValue({oauths:(null===a||void 0===a?void 0:a.oauths)||[""],githubClientId:(null===a||void 0===a?void 0:a.oauth_github.client_id)||"",githubClientSecret:(null===a||void 0===a?void 0:a.oauth_github.client_secret)||"",githubRedirectUri:(null===a||void 0===a?void 0:a.oauth_github.redirect_uri)||""}),w((null===a||void 0===a?void 0:a.oauths)||[""])}),[n,a,w]);var I=function(a){m.a.post("/system-config/update",{type:"oauth",oauth:{oauths:a.oauths,oauth_github:{client_id:a.githubClientId,client_secret:a.githubClientSecret,redirect_uri:a.githubRedirectUri}}}).then((function(a){e.getSystemConfigInfo(),j(!1)}))};return r.a.createElement("div",{className:"card layout-card-view"},r.a.createElement("div",{className:"layout-main-title"},r.a.createElement("h4",{className:"header-title"},"\u7b2c\u4e09\u65b9oauth\u767b\u5f55")),r.a.createElement("div",{className:"config-main"},r.a.createElement(d.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{name:"basic",form:n,initialValues:{remember:!0},onFinish:function(e){I(e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(d.a.Item,{label:"\u52fe\u9009\u7b2c\u4e09\u65b9\u6388\u6743\u767b\u5f55",name:"oauths"},r.a.createElement(O.a.Group,{style:{width:"100%"},disabled:!h,onChange:function(e){w(e)}},r.a.createElement(y.a,null,r.a.createElement(v.a,{span:8},r.a.createElement(O.a,{value:"github"},"github")),r.a.createElement(v.a,{span:8},r.a.createElement(O.a,{value:"qq"},"qq"))))),~p.oauths.indexOf("github")?r.a.createElement("div",{className:"github"},r.a.createElement("div",{className:"github-title"},"github\u6388\u6743\u767b\u5f55"),r.a.createElement(d.a.Item,{label:"client_id",name:"githubClientId",rules:[{required:!0,message:"Please input client_id!"}]},r.a.createElement(u.a,{disabled:!h})),r.a.createElement(d.a.Item,{label:"client_secret",name:"githubClientSecret",rules:[{required:!0,message:"Please input client_secret!"}]},r.a.createElement(u.a,{disabled:!h})),r.a.createElement(d.a.Item,{label:"redirect_uri\uff08\u5f53\u524d\u57df\u540d+/oauth/github \u6b64\u6bb5\u662f\u5fc5\u987b\u56fa\u5b9a\uff09",name:"githubRedirectUri",rules:[{required:!0,message:"Please input redirect_uri!"}]},r.a.createElement(u.a,{disabled:!h}))):"",r.a.createElement("div",{className:"qq",style:{display:~p.oauths.indexOf("qq")?"block":"none"}},r.a.createElement("div",{className:"qq-title"},"qq\u6388\u6743\u767b\u5f55(\u6682\u672a\u5f00\u653e)")),r.a.createElement(d.a.Item,t,h?r.a.createElement("div",null,r.a.createElement(o.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58"),r.a.createElement(o.a,{onClick:function(){j(!1)}},"\u53d6\u6d88")):r.a.createElement(o.a,{type:"primary",onClick:function(){j(!0)}},"\u4fee\u6539")))))},w=b.a.Option,I=function(e){var a=d.a.useForm(),t=Object(i.a)(a,1)[0],l={wrapperCol:{offset:8,span:16}},n=Object(s.useState)(!1),u=Object(i.a)(n,2),p=u[0],E=u[1],f=Object(s.useState)([]),g=Object(i.a)(f,2),h=g[0],y=g[1];Object(s.useEffect)((function(){t.setFieldsValue(Object(c.a)({},e.storage))}),[t,e.storage]),Object(s.useEffect)((function(){m.a.get("/system-config/theme-list").then((function(e){var a;y((null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.list)||[])}))}),[]);var v=function(a){m.a.post("/system-config/update",{type:"config",config:Object(c.a)({},a)}).then((function(a){e.getSystemConfigInfo(),E(!1)}))};return r.a.createElement("div",{className:"card layout-card-view"},r.a.createElement("div",{className:"layout-main-title"},r.a.createElement("h4",{className:"header-title"},"\u4e3b\u9898\u529f\u80fd")),r.a.createElement("div",{className:"config-main"},r.a.createElement(d.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{name:"basic",form:t,initialValues:{remember:!0},onFinish:function(e){v(e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(d.a.Item,{label:"\u9009\u62e9\u4e3b\u9898",name:"theme",rules:[{required:!0,message:"\u9009\u62e9\u4e3b\u9898\uff01",whitespace:!0}]},r.a.createElement(b.a,{disabled:!p},h.map((function(e,a){return r.a.createElement(w,{value:e,key:"key"},e)})))),r.a.createElement(d.a.Item,l,p?r.a.createElement("div",null,r.a.createElement(o.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58"),r.a.createElement(o.a,{onClick:function(){E(!1)}},"\u53d6\u6d88")):r.a.createElement(o.a,{type:"primary",onClick:function(){E(!0)}},"\u4fee\u6539")))))},C=b.a.Option,F=function(e){var a=d.a.useForm(),t=Object(i.a)(a,1)[0],l={wrapperCol:{offset:8,span:16}},n=Object(s.useState)(""),p=Object(i.a)(n,2),E=p[0],f=p[1],g=Object(s.useState)(!1),h=Object(i.a)(g,2),y=h[0],v=h[1];console.log("props",e),Object(s.useEffect)((function(){t.setFieldsValue(Object(c.a)({},e.storage))}),[t,e.storage]);var O=function(a){m.a.post("/system-config/update",{type:"storage",storage:Object(c.a)({},a)}).then((function(a){e.getSystemConfigInfo(),v(!1)}))};return r.a.createElement("div",{className:"card layout-card-view"},r.a.createElement("div",{className:"layout-main-title"},r.a.createElement("h4",{className:"header-title"},"\u5916\u90e8\u5b58\u50a8")),r.a.createElement("div",{className:"config-main"},r.a.createElement(d.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{name:"basic",form:t,initialValues:{remember:!0},onFinish:function(e){O(e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(d.a.Item,{label:"\u7b2c\u4e09\u65b9\u5b58\u50a8\u670d\u52a1\u5546",name:"serviceProvider",rules:[{required:!0,message:"\u9009\u62e9\u7b2c\u4e09\u65b9\u5b58\u50a8\u670d\u52a1\u5546\uff01",whitespace:!0}]},r.a.createElement(b.a,{disabled:!y,onChange:function(e){f(e)}},r.a.createElement(C,{value:"default"},"\u9ed8\u8ba4\u5b58\u50a8\u672c\u5730"),r.a.createElement(C,{value:"qiniu"},"\u4e03\u725b"),r.a.createElement(C,{value:"aliyun"},"\u963f\u91cc\u4e91"),r.a.createElement(C,{value:"tengxun"},"\u817e\u8baf"))),r.a.createElement(d.a.Item,{label:"domain",name:"domain",rules:[{message:"Please input domain!"}]},r.a.createElement(u.a,{disabled:!y})),r.a.createElement(d.a.Item,{label:"bucket",name:"bucket",rules:[{message:"Please input bucket!"}]},r.a.createElement(u.a,{disabled:!y})),r.a.createElement(d.a.Item,{label:"accessKey",name:"accessKey",rules:[{message:"Please input accessKey!"}]},r.a.createElement(u.a,{disabled:!y})),r.a.createElement(d.a.Item,{label:"secretKey",name:"secretKey",rules:[{message:"Please input secretKey!"}]},r.a.createElement(u.a,{disabled:!y})),"qiniu"===E?r.a.createElement(d.a.Item,{label:"\u673a\u623f",name:"zone",rules:[{message:"\u9009\u62e9zone\uff01",whitespace:!0}]},r.a.createElement(b.a,{disabled:!y},r.a.createElement(C,{value:"Zone_z0"},"\u534e\u4e1c"),r.a.createElement(C,{value:"Zone_z1"},"\u534e\u5317"),r.a.createElement(C,{value:"Zone_z2"},"\u534e\u5357"),r.a.createElement(C,{value:"Zone_na0"},"\u5317\u7f8e"))):"","aliyun"===E||"tengxun"===E?r.a.createElement(d.a.Item,{label:"region(bucket\u6240\u5728\u7684\u533a\u57df)",name:"region",rules:[{message:"Please input region!"}]},r.a.createElement(u.a,{disabled:!y})):"",r.a.createElement("div",{className:"aliyun",style:{display:"aliyun"===E?"block":"none"}},r.a.createElement(d.a.Item,{label:"endPoint",name:"endPoint",rules:[{message:"Please input endPoint!"}]},r.a.createElement(u.a,{disabled:!y}))),r.a.createElement(d.a.Item,l,y?r.a.createElement("div",null,r.a.createElement(o.a,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58"),r.a.createElement(o.a,{onClick:function(){v(!1)}},"\u53d6\u6d88")):r.a.createElement(o.a,{type:"primary",onClick:function(){v(!0)}},"\u4fee\u6539")))))};t(544),a.default=function(){var e=Object(s.useState)({}),a=Object(i.a)(e,2),t=a[0],o=a[1],u=function(){m.a.get("/system-config/info").then((function(e){o(e.data)}))};Object(s.useEffect)((function(){u()}),[]);var d=Object(c.a)({},t,{getSystemConfigInfo:u});return r.a.createElement("div",{className:"layout-main",id:"system-config"},r.a.createElement("div",{className:"layout-main-title"},r.a.createElement(n.a,null,r.a.createElement(n.a.Item,{href:"#/manager/index"},r.a.createElement("span",null,"\u4e3b\u9875")),r.a.createElement(n.a.Item,{href:"#"},r.a.createElement("span",null,"\u7cfb\u7edf\u7ba1\u7406")),r.a.createElement(n.a.Item,null,"\u7cfb\u7edf\u914d\u7f6e"))),r.a.createElement(E,d),r.a.createElement(f,d),r.a.createElement(h,d),r.a.createElement(j,d),r.a.createElement(I,d),r.a.createElement(F,d),r.a.createElement(l.a,{message:"\u5907\u6ce8",description:"\u7531\u4e8e\u662f\u7cfb\u7edf\u914d\u7f6e\uff0c\u4fee\u6539\u65f6\u8bf7\u8c28\u614e\uff0c\u4fee\u6539\u6210\u529f\u67d0\u4e9b\u914d\u7f6e\u540e\uff0c\u5982\u679c\u672a\u751f\u6548\u6216\u8005\u51fa\u73b0\u9519\u8bef\uff0c\u8bf7\u52a1\u5fc5\u91cd\u542f\u670d\u52a1",type:"warning",showIcon:!0}))}}}]);