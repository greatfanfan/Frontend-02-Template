# 学习笔记

## 运算符和表达式 （Expression）
### ATOM：
  Grammar
  · Grammae Tree vs Priority （语法树 vs 优先级）
  · Left hand side & Right hand side

  Runtime
  · Type Convertion
  · Reference

### Grammar

### Expressions
#### Member
> a.b  
> a[b]   
> foo`string` 参数  
> super.b class配合  
> super['b']  
> new.target  //todo  
> new Foo()  
#### New
> new Foo  
  
demo:  
new a()() => (`new a()`) `()`  
new new a() => `new` (`new a()`)  

#### Reference `运行时中存在的类型  称为标准中的类型`
Object、key ==  Member  
delete、assign  

#### Call
> foo()  
> super()  
> foo()['b']  
> foo().b  
> foo()`abc`  
  
demo:
new a()['b'] => (`new a()`) `['b']`

#### Left Handside & Right Handside (能否放在=左边的)
a.b = c;  
a + b = c;  
> Update  
 1. a ++  
 2. a --  
 3. -- a  
 4. ++ a  
  
demo:
 ++ a ++

#### Unary (单目运算符)
> delete a.b  
> void foo()  
> typeof a  
> +a  
> -a  
> ~a    按位取反 或 转换成整数  
> !a  
> await a  

#### Exponental (指数)
> **  

3 ** 2 ** 3 => 3 ** ( 2 ** 3)

#### Multiplicative
> */%

#### Additive
> +-

#### Shift
> << >> >>>

#### Relationship
> < > <= >= instanceof in  

`字符串的比较方法`： 字典顺序

#### Equality
> ==  
> !=  
> \===  
> !==  

#### Bitwise
> & ^ |

#### Logical
> &&
> ||

#### Conditional
> ? :

### Type Conversion
· a + b  
· "false" == false  
· a[o] = 1  
![类型转换](https://raw.githubusercontent.com/greatfanfan/Frontend-02-Template/master/week02/images/TypeConversion.png)  

> Unboxing
1. ToPremitive
2. toString vs valueOf
3. Symbol.toPrimitive
  
demo:  
```javascript
var o = {
  toString() {return "2"},
  valueOf() {return 1};
  [Symbol.toPrimitive]() {return 3};
};
var x = {};
console.log("x" + o); //valueOf
x[o] = 1; //toString
```
> Boxing
![封箱操作](https://raw.githubusercontent.com/greatfanfan/Frontend-02-Template/master/week02/images/Boxing.png)  
  
### Statement
Grammar: 简单语句、组合语句、声明  
Runtime: Completion Record（执行记录）、 Lexical Environment (作用域)  

#### Completion Record
1. \[[type]]: normal、 break、 continue、 return、 throw
2. \[[value]]: 基本类型
3. \[[target]]: label  语句前的标识符、：

#### 简单语句
1. ExpressionStatement
2. EmptyStatement `;`
3. DebuggerStatement `debugger`
4. ThrowStatement `throw`
5. ContinueStatement
6. BreakStatement
7. ReturnStatement

#### 复合语句
1. BlockStatemnt
> {xxx} 
2. IfStatement
3. SwitchStatement `javascript中和if的性能差不多`
4. IterationStatement
> while(x) {xx}
> do {x} while (xx);
> for (x;xx;xxx;){xxx}
> for (x in xx) {xxx}
> for (x of xx) {xxx}
> for await (of)
5. WithStatement
6. LabelledStatement 
7. TryStatement  
[[type]]: return
```javascript
try {
  // 花括号不能省略
} catch() {

} finally {

}
```  

#### 声明 `对后续语句发生作用的语句 =》 声明`
1. FunctionDeclaration: function
2. GeneratorDeclaration: function*
3. AsyncFunctionDeclaration: async function
4. AsyncGeneratorDeclaration: async function*
5. VariableStatement: var
6. ClassDeclaration: class
7. LexicalDeclaration: const、let

`预处理：（pre-process）`  
1. var  
```javascript
var a = 2;
void function() {
  a = 1;
  return;
  var a;
}();
console.log(a); //2
```  
2. const  
```javascript
var a = 2;
void function () {
  a = 1;
  return;
  const a;
}();
console.log(a); //Uncaught SyntaxError: Missing initializer in const declaration  
```  
`作用域`  
1. var
```javascript
var a = 2;
void function() {
  a = 1;
  {
    var a;
  }
}();
console.log(a); //2
```
2. const
```javascript
var a = 2;
void function() {
  a = 1;
  {
    const a = 3;
  }
}();
console.log(a); //1
```
总结01:
====
尽量使用：const、let、class

### 宏任务和微任务
#### JS执行粒度（运行时）
1. 宏任务： 传给js引擎的任务
2. 微任务： （Promise）js内部的任务
3. 函数调用： （Execution Context）
4. 语句/声明 ：（Completion Record）
5. 表达式：（Reference）
6. 直接量/变量/this  

#### 事件循环
get code =》 execute =》 wait  

总结02:
====
根据宏任务和微任务的区别，在分析代码的执行顺序时，先分析宏任务有哪些，在每个宏任务中， 分析有多少微任务；  
然后确定每个宏任务中，微任务的执行次序；  
最后，确定宏任务的执行顺序。  
宏任务1 =》 微任务11 =》 微任务12 =》 宏任务2 =》 微任务21 =》 微任务22 ...  

#### 函数调用
执行上下文：Execution Context
1. code evaluation state： 用于async、generator函数，用于保存代码执行到哪里的信息
2. Function：
3. Script or Module：
4. Generator：每次执行所生成的隐藏的Generator
5. Realm：保存所有使用的内置对象
6. LexicalEnviroment：
> this、new.target、super、变量
7. VariableEnvironment：
> var

栈顶元素：Running Execution Context  
  
Environment Record:
Declarative Environment Record > （Function， module）、 Global Environment Record、 Object Environment Records  
  
Function Closure  
每个函数都会生成一个闭包。闭包 = 代码部分（） + 环境部分（object：Environment Records、变量的序列）  


#### Realm 一个javascript引擎中内置对象的合集

总结3；
====
JavaScript是运行时语言，需要了解运行时产生的环境，这样才能对一些函数调用等有更基础的认识。


