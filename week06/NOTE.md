# 学习笔记

## CSS总体结构
@charset
@import
rules：@media、@page、rule

### At-rules
@charset： 字符集
@import：引入
@media 媒体查询
@page： 分页
@counter-style 列表前标识
@keyframes 动画
@fontface：字体
@supports ： css的兼容性，不推荐使用
@namespace：svg等

### CSS规则
1. 选择器 https://www.w3.org/TR/selectors-3
2. 声明：
    key 
    value

## 选择器
1. 简单选择器：*、div svg｜a（命名空间）、 .cls、 #id、 [attr=value]、:hover、::before
2. 复合选择器：<简单选择器><简单选择器><简单选择器> 、 *或者div必须写在最前面
3. 复杂选择器：<复合选择器><sp><复合选择器>、<复合选择器>">"<复合选择器>、<复合选择器>"~"<复合选择器>、<复合选择器>"+"<复合选择器>、<复合选择器>"||"<复合选择器>

## 选择器的优先级

简单选择器计数：
#id div.a#id{}  [0,2,1,1]

## 伪类
1. 链接/行为  :any-link(所有链接), :link:visited(元素只能设置颜色), :hover, :active, :focus, :target
2. 树结构 :empty, :nth-child(), :nth-last-child(), :first-child :last-child :only-child
3. 逻辑性 :not伪类, :where :has

## 伪元素
1. ::before
2. ::after
3. ::first-line: font, color, background, word-spacing, letter-spacing, text-decoration, text-transform, line-height
4. ::first-letter: float, vertical-align, 盒模型系列（margin， padding，border）

思考题：
为什么first-letter可以设置float，而first-line不可以？
> Note that the ::first-letter pseudo-element tags abut the content (i.e., the initial character), while the ::first-line pseudo-element start tag is inserted right after the start tag of the block element.
In CSS, the ::first-line pseudo-element can only have an effect when attached to a block container. The first formatted line of an element must occur inside a block-level descendant in the same flow (i.e., a block-level descendant that is not out-of-flow due to floating or positioning).

作业1:
编写一个match函数