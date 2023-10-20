(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{674:function(e,t,v){"use strict";v.r(t);var r=v(18),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"注册中心"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注册中心"}},[e._v("#")]),e._v(" 注册中心")]),e._v(" "),v("p",[e._v("注册中心负责服务地址的注册与查找，相当于目录服务。 服务端启动的时候将服务名称及其对应的地址 (ip+port) 注册到注册中心，服务消费端根据服务名称找到对应的服务地址。有了服务地址之后，服务消费端就可以通过网络请求服务端 了。")]),e._v(" "),v("p",[e._v("简单来说注册中心就像是一个中转站，提供的作用就是根据调用的服务名称找到远程服务的地址。")]),e._v(" "),v("p",[e._v("当我们的服务被注册进 Zookeeper 的时候，我们将完整的服务名称 "),v("code",[e._v("rpcServiceName (class name + group + version)")]),e._v(" 作为根节点，子节点是对应的服务地址 "),v("code",[e._v("(ip + port)")]),e._v("。一个根节点("),v("code",[e._v("rpcServiceName")]),e._v(") 可能会对应多个服务地址（相同服务被部署在不同服务器上的情况）。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("class name")]),e._v("：服务接口名称")]),e._v(" "),v("li",[v("code",[e._v("group")]),e._v("：服务所在的组，主要用于处理一个接口有多个实现类的情况，相当于实现类")]),e._v(" "),v("li",[v("code",[e._v("version")]),e._v("：服务版本，主要是为后续不兼容升级提供可能")])]),e._v(" "),v("p",[e._v("如果我们要获得某个服务对应的地址的话，就直接根据完整的服务名称来获取到其下的所有子节点，然后通过具体的负载均衡策略取出一个就可以了。")]),e._v(" "),v("h2",{attrs:{id:"参考博客"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考博客"}},[e._v("#")]),e._v(" 参考博客")]),e._v(" "),v("ul",[v("li",[e._v("https://www.cnblogs.com/luffsama/articles/17219842.html")])])])}),[],!1,null,null,null);t.default=s.exports}}]);