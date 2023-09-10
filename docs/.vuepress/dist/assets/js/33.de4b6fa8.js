(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{647:function(t,s,l){"use strict";l.r(s);var a=l(18),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,l=t._self._c||s;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h2",{attrs:{id:"elasticsearch入门"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch入门"}},[t._v("#")]),t._v(" Elasticsearch入门")]),t._v(" "),l("ul",[l("li",[t._v("Elasticsearch简介\n"),l("ul",[l("li",[t._v("一个分布式的（多台服务器进行部署）、Restful风格（设计风格）的"),l("strong",[t._v("搜索引擎")])]),t._v(" "),l("li",[t._v("支持对各种类型的数据的检索")]),t._v(" "),l("li",[t._v("搜索速度快，可以提供实时的搜索服务")]),t._v(" "),l("li",[t._v("便于水平扩展，每秒可以处理PB级海量数据")]),t._v(" "),l("li",[t._v("可以理解为一个特殊的数据库，要利用ES需要将数据在ES里存一份")])])]),t._v(" "),l("li",[t._v("Elasticsearch术语（与mysql对比着看），在ES6.0之后要废弃类型，一个索引相当于一张表\n"),l("ul",[l("li",[l("strong",[t._v("索引")]),t._v("（database）、"),l("strong",[t._v("类型")]),t._v("（table）、"),l("strong",[t._v("文档")]),t._v("(一条数据)、"),l("strong",[t._v("字段")]),t._v("(一列)")]),t._v(" "),l("li",[l("strong",[t._v("集群")]),t._v("、"),l("strong",[t._v("节点")]),t._v("(集群中的每台服务器)、"),l("strong",[t._v("分片")]),t._v("(对索引的拆分)、"),l("strong",[t._v("副本")]),t._v("(对分片的备份)")])])]),t._v(" "),l("li",[t._v("Elasticsearch使用\n"),l("ul",[l("li",[t._v("在搜索时会先将搜索的条件进行分词，再将词条进行匹配")]),t._v(" "),l("li",[t._v("9200是http访问的端口，9300是TCP端口")])])])]),t._v(" "),l("h2",{attrs:{id:"spring-整合-elasticsearch"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#spring-整合-elasticsearch"}},[t._v("#")]),t._v(" spring 整合 Elasticsearch")]),t._v(" "),l("ul",[l("li",[t._v("引入依赖\n"),l("ul",[l("li",[t._v("spring-boot-starter-data-elasticsearch")])])]),t._v(" "),l("li",[t._v("配置 Elasticsearch\n"),l("ul",[l("li",[t._v("cluster-name、cluster-nodes")])])]),t._v(" "),l("li",[t._v("Spring Data Elasticsearch\n"),l("ul",[l("li",[t._v("ElasticsearchTemplate")]),t._v(" "),l("li",[t._v("ElasticsearchRepository")])])]),t._v(" "),l("li",[t._v("注意点\n"),l("ul",[l("li",[t._v("redis底层依赖 netty，而 ES底层也依赖 netty，所以需要设置 NettyUtils 的 setAvailableProcessor 避免 ES 报错")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);