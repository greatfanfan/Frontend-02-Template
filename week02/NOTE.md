#学习笔记

##语言通识
###BNF
###语言的分类
###编程语言的性质：
  ####`图灵完备性`：可计算的问题可描述
    *命令式——图灵机
      *goto
      *if和while
    *声明式——lambda
      *递归
  
  ####`动态和静态`
    *`动态`
      *在用户的设备/在线服务器上
      *产品实际运行时
      *Runtime
    *`静态`
      *在程序员的设备上
      *产品开发时
      *Compiletime

  ####`类型系统`
    *动态类型系统（JavaScript）和静态类型系统（C++）

    *强类型与弱类型 （类型转换）
      *String + Number
      *String == Boolean

    *复合类型
      *结构体
      *函数签名：函数参数

    *子类型：C++
    *泛型
      *逆变/协变

###一般命令式语言的设计方式：
  ![](https://github.com/greatfanfan/Frontend-02-Template/tree/master/week02/images/image01.png)

  语法 =》 语义 =》 运行时


总结01:
---------
通识课，学习到一些基础概念，尤其是产生式，以前一直不知道编程语言式咋产生的，有了一点点了解。其中类型系统中，关于子类型、泛型的概念没有涉及到，后续学习TS可能会有阻塞。

##JS类型
###Number
>`IEEE 754 Double Float`
>>浮点数：数字 = 指数（范围） + 有效位数（精度）
> 1sign + 11Exponent + 52Fraction
>>![](https://github.com/greatfanfan/Frontend-02-Template/tree/master/week02/images/image02.png)
三次转换 + 1次运算 导致 0.1 + 0.2 != 0.3
特殊：0.toString()   0 .toString()

###String
> 模版字符串
> 编码：ACSII、Unicode、GB、ISO、BIG5
>> 作业字符串转UTF8，待完成。

###对象
>对象三要素：identify、state、behavior
对象属性：数据属性、访问器属性
>>![](https://github.com/greatfanfan/Frontend-02-Template/tree/master/week02/images/image03.png)
对象几种使用方法
>>![](https://github.com/greatfanfan/Frontend-02-Template/tree/master/week02/images/image04.png)
特殊的对象属性[[call]]
>>![](https://github.com/greatfanfan/Frontend-02-Template/tree/master/week02/images/image05.png)