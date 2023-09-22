---
title: '八股自测速记之Spring'
---

> 这篇文章以问答的形式用于快速回顾知识点以及用于自测。  
> 因为知识点相当多，即使在看时能够理解记住，但过后也往往只是有印象，大概知道是什么东西，但想回答出来却总是卡壳，看了忘，忘了看。因此，这篇文章用于帮助速记回忆，自测时可以由这些点延伸。  



## Spring 基础

#### 什么是 Spring 框架？
一款开源的轻量级Java开发框架，核心思想是不重复造轮子，开箱即用，提高开发效率。提供的核心功能主要是 IoC 和 AOP。

#### Spring 包含的模块有哪些？
- Core Container
- AOP
- Data Access / Integration
- Spring Web
- Messaging：新加入的模块，主要是为 Spring 框架集成一些基础的报文传送应用。
- Spring Test

#### Spring、Spring MVC、Spring Boot 之间有什么关系？
- Spring MVC（Model、View、Controller） 是 Spring 中的一个重要模块。  
- Spring 旨在简化 J2EE（Java 2 Platform Enterprise Edition） 企业应用程序开发。  
- Spring Boot 旨在简化 Spring 开发（减少配置文件，开箱即用）。


## Spring IoC

#### 什么是 IoC？
IoC 即控制反转，它是一种设计思想，而不是具体实现。

#### 为什么叫控制反转？
它将对象创建（实例化、管理）的权力交给了外部环境（Spring 框架、IoC 容器），在需要的时候进行依赖注入即可。

#### 什么是 IoC 容器？
IoC 容器是 Spring 用来实现 IoC 的载体，它实际上就是个 Map，Map 中存放的是各种对象。

#### 什么是 Spring Bean？
被 IoC 容器管理的对象。

#### 怎么注册 Spring Bean？
需要通过配置元数据来定义，可以通过 XML 文件、注解或者 Java 配置类。

#### 将一个类声明为 Bean 的注解有哪些？
@Component、@Controller、@Service、@Repository

#### @Component 和 @Bean 的区别是什么？
- @Component 作用于类，@Bean 作用于方法
- @Component 通常是通过类路径扫描来自动检测和自动装配到 Spring 容器中的，而 @Bean 通常是我们在方法中手动产生实例并将其作为返回值，@Bean 告诉 Spring 这个返回值就是 bean。
- @Bean 比 @Component 自定义性更强，很多时候只能通过 @Bean 注解来注册 bean，比如第三方类库。

#### 注入 Bean 的注解有哪些？
@Autowired、@Resource、@Inject(较少使用)

#### @Autowired 和 @Resource 的区别是什么？
- @Autowired 是 Spring 提供的注解，@Resource 是 JDK 提供的注解。
- @Autowired 默认注入方式是 `byType`，@Resource 默认注入方式是 `byName`。
- 当接口存在多个实现类的时候，它们都需要通过名称来正确匹配，@Autowired 通过 @Qualifier 注解指定，@Resource 通过它的 `name` 属性指定。
- @Autowired 支持在构造函数、方法、字段和参数上使用，而 @Resource 主要用于字段和方法上的注入，不支持构造函数或参数上使用。

#### Bean的作用域有哪些？
- singleton
- prototype
- request（仅 Web 应用可用）：每一次 HTTP 请求都会产生一个新的 bean，仅在请求期间有效。
- session（仅 Web 应用可用）：每一次来自新 session 的 HTTP 请求都会产生一个新的 bean，仅在 session 请求期间有效。
- application/global-session（仅 Web 应用可用）：每个 Web 应用启动时创建一个 bean，仅在应用期间有效。
- websocket（仅 Web 应用可用）：每一次 websocket 会话产生一个新的 bean。

#### 如何配置 bean 的作用域？
- xml 方式：scope="singleton"
- 注解方式：@Scope(Value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)

#### Bean 是线程安全的吗？
Bean 是否线程安全，取决于作用域和状态。
- prototype 每次获取创建一个新的 bean，不存在资源竞争，所以不存在线程安全问题。
- singleton 可能会有资源竞争的问题，取决于 bean 是否有状态，有状态则存在线程安全问题。bean 有状态是指包含可变的成员变量。大部分 bean 都是无状态的，比如 Dao、Service 层的 bean。
- 对于有状态单例 bean 的线程安全问题，有两种解决方案：
  - 在 bean 中尽量避免定义可变的成员变量
  - 利用 ThreadLocal 存储成员变量（推荐）

#### Bean 的生命周期？
从上往下：
- 实例化 bean 对象
- 设置对象属性
- 检查 Aware 相关接口并设置依赖
- BeanPostProcessor 前置处理
- 检查是否有 InitializingBean 以决定是否调用 afterPropertiesSet 方法
- 检查是否有自定义的 init-method
- BeanPostProcessor 后置处理
- 注册必要 Destruction 相关回调接口
- 使用中
- 销毁时，是否实现了 DisposableBean 接口，是否有自定义的 `destroy()`方法，若实现执行 `destroy()` 方法。


## Spring AOP

#### Spring AOP 是什么？
Aspect-Oriented Programmer，面向切面编程，用于进行方法功能增强或封装通用的代码逻辑。   
Spring AOP 是基于动态代理的，若要代理的对象实现了接口则使用 JDK 动态代理，若未实现接口则使用 CGLib 动态代理。

#### AOP 切面编程涉及到的专业术语有哪些？
- 目标（Target）：要代理的对象。
- 代理(Proxy)：代理对象，即增强后的对象。
- 连接点(JoinPoint)：目标对象所属的类中，定义的所有方法都是连接点。
- 切入点(PointCut)：要执行增强的方法。
- 通知(Advice)：增强的逻辑，也就是拦截到目标对象的连接点之后要做的事。
- 切面(Aspect)：切点 + 通知。
- 织入(Weaving)：将通知应用到目标对象，进而产生代理对象的过程动作。

#### Spring AOP 和 AspectJ AOP 有什么区别？
- Spring AOP 属于运行时增强，AspectJ AOP 是编译时增强。
- Spring AOP 基于代理，而 AspectJ AOP 基于字节码操作。
- Spring AOP 已经集成了 AspectJ。
- AspectJ AOP 比 Spring AOP 功能更强大，性能更快，而 Spring AOP 相对来说更简单。

#### AspectJ 定义的通知类型有哪些？
- Before（前置通知）
- After（后置通知）
- Around（环绕通知）
- AfterReturning（返回通知）
- AfterThrowing（异常通知）

#### 多个切面的执行顺序如何控制？
- 通常使用 @Order 注解直接定义切面顺序
- 也可以实现 Ordered 接口重写 getOrder 方法。


## Spring MVC

#### Spring MVC 是什么？
MVC 是 Model、View、Controller 的简写，它更像是一种设计模式，其核心思想是通过将业务逻辑、数据、显示分离来组织代码。   
Spring MVC 是一款很优秀的 MVC 框架，可以简化 Web 层的开发，并且天生与 Spring 框架集成。

#### Spring MVC 的核心组件有哪些？
- `DispatcherServlet`：核心的中央处理器，负责接收请求、分发，并给予客户端响应。
- `HandlerMapping`：处理器映射器，根据 URL 去匹配查找能处理的 Handler，并将请求涉及到的拦截器和 Handler 一起封装。
- `HandlerAdapter`：处理器适配器，根据 HandlerMapping 找到的 Handler，适配执行对应的 Handler。
- `Handler`：请求处理器，处理实际请求。
- `ViewResolver`：视图解析器，根据 Handler 返回的逻辑视图/视图，解析并渲染真正的视图，并传递给 DispatcherServlet 响应客户端。

#### Spring MVC 的工作原理？
1. 客户端发送请求，`DispatcherServlet` 拦截请求。
2. `DispatcherServlet` 根据请求信息调用 `HandlerMapping`。`HandlerMapping` 根据 URL 去匹配查找能处理的 `Handler` （也就是平常说的 `Controller` 控制器），并将请求涉及到的拦截器和 `Handler` 一起封装。
3. `DispatcherServlet` 调用 `HandlerAdapter` 执行 `Handler`。
4. `Handler` 完成用户请求的处理，会返回一个 `ModelAndView` 对象给 `DispatcherServlet`。`ModelAndView` 包含了数据模型和相应的视图信息。`Model` 是返回的数据对象，`View` 是视图。
5. `ViewResolver` 会根据逻辑视图解析渲染真正的视图。
6. `DispatcherServlet` 把返回的 `Model` 传给 `View`。
7. 把 `View` 返回给客户端。

#### 统一异常处理怎么做？
使用 @ControllerAdvice + @ExceptionHandler 这两个注解


## Spring 中的设计模式

#### JDK 中用到了哪些设计模式？
- 单例模式：`java.lang.Runtime` 类使用了单例模式来确保在一个 Java 虚拟机中只有一个运行时实例。
- 工厂模式：`java.util.Calendar` 类使用了工厂方法来创建日历实例。
- 观察者模式：Java 的事件处理机制（如 AWT 和 Swing 中的事件监听器）使用了观察者模式，其中事件源通知注册的观察者对象有关事件的发生。
- 策略模式：`java.util.Comparator` 接口用于定义比较策略，允许对象根据不同的策略进行比较。
- 装饰器模式：输入输出流类层次结构中的装饰器类（如 `java.io.BufferedReader` 和 `java.io.BufferedWriter`）使用了装饰器模式来增强流的功能。
- 适配器模式：`java.util.Arrays` 类中的 `asList()` 方法返回的 `List` 适配器将数组转换为 `List` 对象。
- 迭代器模式：Java 集合框架中的集合类（如 `ArrayList、HashSet`）使用了迭代器模式来遍历元素。
- 模板方法模式：`java.io.InputStream` 和 `java.io.OutputStream` 类中的读取和写入方法使用了模板方法模式，其中核心算法由超类定义，而具体操作由子类实现。
- 命令模式：`java.util.concurrent` 包中的 `Executor` 接口使用了命令模式，将任务封装为命令以异步执行。


#### Spring 中用到了哪些设计模式？
- 依赖注入（Dependency Inject）：它是实现控制反转的一种设计模式，就是将实例变量传入到一个对象中去。
- 工厂设计模式：Spring 使用工厂模式可以通过 `BeanFactory` 或 `ApplicationContext` 创建 bean 对象。
- 单例设计模式：Spring 通过 `ConcurrentHashMap` 实现单例注册表的特殊方式实现单例模式。
- 代理模式：Spring AOP 就是基于动态代理的，如果要代理的对象实现了某个接口则使用 JDK 动态代理，如果没有实现接口则使用 CGlib 动态代理。
- 模板方法模式：一种行为设计模式，它定义一个操作中的算法的骨架，而将一些步骤延迟到子类中实现。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤的实现方式。Spring 中 `JdbcTemplate、HibernateTemplate` 等以 Template 结尾的对数据库操作的类，它们就使用到了模板模式。
- 观察者模式：一种对象行为型模式，表示一种对象与对象之间具有依赖关系，当一个对象发生改变的时候，依赖这个对象的所有对象也会做出反应。Spring 事件驱动模型就是观察者模式很经典的一个应用。
- 适配器模式：Adapter Pattern 将一个接口转换成客户希望的另一个接口，适配器模式使接口不兼容的那些类可以一起工作。


#### 使用单例模式的好处？
- 对于频繁使用的对象，可以省略创建对象所花费的时间，特别是对重量级对象而言。
- 由于 new 操作次数减少，对系统内存的使用频率也会降低，这将减轻 GC 压力，缩短 GC 停顿时间。

#### Spring 工厂模式中 `BeanFactory` 和 `ApplicationContext` 创建对象有什么不同？
- `BeanFactory`：延迟注入（使用到某个 bean 时才会注入），相比于 `ApplicationContext` 来说占用更少的内存，程序启动速度更快。
- `ApplicationContext`：程序启动时一次性创建所有的 bean。`ApplicationContext` 扩展了 `BeanFactory`，除了有 `BeanFactory` 的功能还有额外更多功能，一般来说使用这个更多。它的三个实现类如下：
  - `ClassPathXmlApplication`：它会在类路径下查找指定的 XML 配置文件，并根据配置文件中定义的 Bean 来初始化应用程序上下文。
  - `FileSystemXmlApplication`：从本地文件系统中的 XML 文件载入上下文定义信息。
  - `XmlWebApplicationContext`：从 Web 系统中的 XML 文件载入上下文定义信息。