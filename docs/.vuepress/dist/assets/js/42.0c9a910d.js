(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{669:function(v,l,_){"use strict";_.r(l);var e=_(18),t=Object(e.a)({},(function(){var v=this,l=v.$createElement,_=v._self._c||l;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"开发环境的搭建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发环境的搭建"}},[v._v("#")]),v._v(" 开发环境的搭建")]),v._v(" "),_("h3",{attrs:{id:"数据库环境的搭建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库环境的搭建"}},[v._v("#")]),v._v(" 数据库环境的搭建")]),v._v(" "),_("ul",[_("li",[v._v("十一张表及其结构")])]),v._v(" "),_("h3",{attrs:{id:"开发环境搭建-maven项目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发环境搭建-maven项目"}},[v._v("#")]),v._v(" 开发环境搭建（maven项目）")]),v._v(" "),_("ul",[_("li",[v._v("创建maven项目（注意检查项目编码、仓库配置、jdk配置）")]),v._v(" "),_("li",[v._v("pom.xml（继承2.4.5起步依赖，管理依赖及插件）")]),v._v(" "),_("li",[v._v("配置文件（application.yml）配置端口、spring、mybatis-plus")]),v._v(" "),_("li",[v._v("编写启动类(springboot启动类)，加上lombok提供的Slf4j注解以便启动类中输出日志(log.info())")]),v._v(" "),_("li",[v._v("导入页面包括后端页面和前端页面（已提供好的，要看得懂会使用但不放在重点位置）\n"),_("ul",[_("li",[v._v("backen（后端页面）和front（前端页面）直接放在resources目录下会有问题，不能访问，因为默认只能访问resources/static目录下的和resources/templates目录下")]),v._v(" "),_("li",[v._v("编写一个配置类配置springmvc对于静态资源的映射，继承WebMvcConfigurationSupport，重写addResourceHandlers方法以设置静态资源映射")])])])]),v._v(" "),_("h3",{attrs:{id:"后台登录功能开发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#后台登录功能开发"}},[v._v("#")]),v._v(" 后台登录功能开发")]),v._v(" "),_("ul",[_("li",[v._v("需求分析，明确前后端的数据交互")]),v._v(" "),_("li",[v._v("创建实体类Employee，跟数据库中的employee表（存储用户名和密码）进行映射")]),v._v(" "),_("li",[v._v("编写mapper和service，以及要返回给前端的结果类(不一定是user对象，还可能是菜品对象，所以要返回的数据要定义为泛型)")]),v._v(" "),_("li",[v._v("在controller中创建登录方法\n"),_("ul",[_("li",[v._v("先将前端返回的明文密码进行md5加密")]),v._v(" "),_("li",[v._v("根据用户名查询数据库")]),v._v(" "),_("li",[v._v("进行密码比对")]),v._v(" "),_("li",[v._v("查看员工状态是否为禁用状态")]),v._v(" "),_("li",[v._v("登录成功将员工id存入Session并返回登录成功结果")])])]),v._v(" "),_("li",[v._v("设置过滤器或拦截器使得用户不能直接访问系统页面，必须登录了才能访问\n"),_("ul",[_("li",[v._v("创建自定义过滤器 LoginCheckFilter")]),v._v(" "),_("li",[v._v("在启动类上加入注解@ServletComponentScan扫描过滤器")]),v._v(" "),_("li",[v._v("完善过滤器的处理逻辑\n"),_("ul",[_("li",[v._v("获取本次请求的URI")]),v._v(" "),_("li",[v._v("判断本次请求是否需要处理")]),v._v(" "),_("li",[v._v("判断登录状态，如果已登录，则直接放行")]),v._v(" "),_("li",[v._v("如果未登录则返回未登录结果")])])])])])]),v._v(" "),_("h3",{attrs:{id:"后台退出功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#后台退出功能"}},[v._v("#")]),v._v(" 后台退出功能")]),v._v(" "),_("ul",[_("li",[v._v("前端设置点击退出图片的事件，访问服务器")]),v._v(" "),_("li",[v._v("退出方法接收前端的请求，将Session中的id移除")]),v._v(" "),_("li",[v._v("前端接到后台退出成功，也移除存储的用户信息(localStorage)，跳转到登录页面")])]),v._v(" "),_("h3",{attrs:{id:"新增员工"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新增员工"}},[v._v("#")]),v._v(" 新增员工")]),v._v(" "),_("ul",[_("li",[v._v("页面发送ajax请求，将新增员工页面中输入的数据以json的形式提交到服务端")]),v._v(" "),_("li",[v._v("服务端Controller接收页面提交的数据并调用service将数据进行保存")]),v._v(" "),_("li",[v._v("service调用Mapper操作数据库，保存数据")])])])}),[],!1,null,null,null);l.default=t.exports}}]);