module.exports = {
    base: `/Note/`,
    title: 'The Note of HelloWorldYC',
    description: 'Just playing around',
    head: [['link', {rel: 'icon', href: '/images/myfavicon.png'}]],
    plugins: {
            '@maginapp/vuepress-plugin-katex': {
              delimiters: 'dollars'
            }
          },
    themeConfig: {
        navbar: true,          // 禁用导航栏
        sidebarDepth: 2,            // 侧边栏显示层数
        sidebar: [
          {
            title:'matlab',
            children:[
              '/matlab/常用函数.md',
              '/matlab/语法.md',
              '/matlab/matlab安装Matconvnet.md'
            ]
          },
          {
            title:'python',
            children:[
              '/python/pycharm出现的问题及解决方法.md',
              '/python/python函数.md',
              '/python/python语法规则',
              '/python/面向对象.md'
            ]
          },
          {
            title:'无人机项目',
            children:[
              '/无人机项目/PX4开发环境搭建.md',
              '/无人机项目/对P110B的理解.md',
              '/无人机项目/ROS学习心得.md',
            ]
          },
          {
            title:'数字图像处理',
            children:[
              '数字图像处理/基础概述.md',
              '数字图像处理/像素空间关系.md',
              '数字图像处理/图像的缩放.md',
              '数字图像处理/空域增强技术一'
            ]
          },
          {
            title:'深度学习',
            children:[
              '深度学习/卷积神经网络.md',
              '深度学习/矩阵求导.md',
              {
                title:'神经网络和深度学习',
                children:[
                  '深度学习/神经网络和深度学习/深度学习引言.md',
                  '深度学习/神经网络和深度学习/神经网络的编程基础.md'
                ]
              }
            ]
          },
          {
            title:'信源数估计',
            children:[
              '信源数估计/信源数估计综述.md',
              '信源数估计/一点想法.md',
              '信源数估计/各种信源算法.md',
              '信源数估计/知识细节.md',
              {
                title:'空间谱估计基础',
                children:[
                  '信源数估计/空间谱估计基础/空间谱估计数学模型.md',
                  '信源数估计/空间谱估计基础/阵列模型二阶统计特性.md',
                  '信源数估计/空间谱估计基础/空间谱估计基础知识.md',
                  '信源数估计/空间谱估计基础/信号源数估计.md',
                  '信源数估计/空间谱估计基础/前后向空间平滑法.md'
                ]
              }
            ]
          },
          {
            title:'Java',
            children:[
              {
                title:'Java基础',
                children:[
                  'Java/Java基础/Java基础语法补充.md',
                  'Java/Java基础/Java并发编程.md',
                  'Java/Java基础/阻塞队列.md'
                ]
              },
              {
                title:'Java框架',
                children:[
                  {
                    title:'微服务',
                    children:[
                      './Java/Java框架/微服务/微服务介绍.md',
                      './Java/Java框架/微服务/Docker入门.md',
                      './Java/Java框架/微服务/RabbitMQ入门.md',
                      './Java/Java框架/微服务/Elasticsearch入门.md',

                    ]
                  },
                  './Java/Java框架/Kafka.md',
                  './Java/Java框架/SpringSecurity.md'
                ]
              },
              {
                title:'校园信息交流平台项目',
                children:[
                  './Java/校园信息交流平台项目/项目总体.md',
                  './Java/校园信息交流平台项目/项目细节.md',
                  './Java/校园信息交流平台项目/项目问题及解决.md',
                  './Java/校园信息交流平台项目/项目常见面试题.md'
                ]
              },
              {
                title:'简易RPC框架项目',
                children:[
                  './Java/简易RPC框架项目/RPC原理.md',
                  './Java/简易RPC框架项目/Socket网络通信.md',
                  './Java/简易RPC框架项目/Netty从入门到网络通信实战.md',
                  './Java/简易RPC框架项目/项目网络传输模块细节.md',
                  './Java/简易RPC框架项目/项目注册中心模块细节.md',
                  './Java/简易RPC框架项目/Zookeeper.md',
                  './Java/简易RPC框架项目/服务注册与消费细节.md',
                  './Java/简易RPC框架项目/负载均衡细节.md',
                  './Java/简易RPC框架项目/静态代理与动态代理.md',
                  './Java/简易RPC框架项目/Docker.md',
                  './Java/简易RPC框架项目/项目过程中遇到的bug.md',
                  './Java/简易RPC框架项目/项目问题.md'
                ]
              },
              {
                title: '内功',
                children:[
                  {
                    title:'MySQL',
                    children:[
                      './Java/内功/MySQL/基础架构.md',
                      './Java/内功/MySQL/易忘的重点.md'
                    ]
                  },
                  {
                    title:'Redis',
                    children:[
                      './Java/内功/Redis/Redis总体架构.md',
                      './Java/内功/Redis/Redis一点点细节.md'
                    ]
                  },
                  {
                    title:'操作系统',
                    children:[
                      './Java/内功/操作系统/导论.md'
                    ]
                  }
                ]
              },
              {
                title:'知识点自测速记',
                children:[
                  './Java/知识点自测速记/知识点自测速记之Java基础.md',
                  './Java/知识点自测速记/知识点自测速记之Java集合.md',
                  './Java/知识点自测速记/知识点自测速记之Java并发编程.md',
                  './Java/知识点自测速记/知识点自测速记之JVM.md',
                  './Java/知识点自测速记/知识点自测速记之计算机网络.md',
                  './Java/知识点自测速记/知识点自测速记之操作系统.md',
                  './Java/知识点自测速记/知识点自测速记之数据库基础.md',
                  './Java/知识点自测速记/知识点自测速记之MySQL.md',
                  './Java/知识点自测速记/知识点自测速记之Redis.md',
                  './Java/知识点自测速记/知识点自测速记之Spring.md',
                  './Java/知识点自测速记/知识点自测速记之Mybatis.md'
                ]
              }
            ]
          }
        ]
      }
  }