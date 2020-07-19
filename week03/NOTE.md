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



