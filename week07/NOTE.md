# 学习笔记

## CSS排版
1. 标签Tag、元素Element、盒Box  
2. 盒模型：
  content(content-box) < padding < border(border-box) < margin  
  > `box-sizing`:  
    content-box: content-box + padding + border + margin  
    border-box: border-box + margin

## 正常流
· 收集盒进行
· 计算盒在行中的排布
· 计算行的排布
  
1. 行级排布：inline-box （IFC）  
   `Baseline`:  vertical-align：text-bottom、text-top会撑开行的高度
   `Text`:  freeType[https://www.oschina.net/p/freetype?hmsr=aladdin1e1]

2. 块级排布：line-box block-level-box （BFC）  【考点】
    >> float & clear
    float会堆叠，使用clear消除影响，<br> 对float无效
    >> margin: 边距折叠，取最大值
3. BFC合并
    `Block`:   
    Block Container:里面有BFC的，能容纳正常流的盒【block，inline-block，table-cell、flex-item、grid-cell， table-caption】
    Block Level Box：外面有BFC的
      【Block Level】：block、flex、table、grid
      【Inline Level】：inline-block、inline-flex、inline-table、inline-grid

    Block Box：Block Container + Block Level Box
      floats、absolute position、block containers、block boxes with ’overflow‘ other than ‘visible’【`block box && overflow:visible`】
      `BFC合并与float`
      `BFC合并与边距折叠`
  4. Flex排版：
    收集盒 -> 计算盒在主轴方向的排布 -> 计算盒在交叉轴方向的排布。
    分行：根据主轴尺寸，把元素分进行，若设置了no-wrap，则强行分配进第一行。
    计算主轴方向：找出所有Flex元素；把主轴方向的剩余尺寸按比例分配给这些元素。若剩余空间为负数，所有flex元素为0，等比压缩剩余元素。
    计算交叉轴方向：根据每一行中最大元素尺寸计算行高，根据行高flex-align（每个元素）、item-align（外面），确定元素具体位置。

## 动画
  1. 属性 
    `@keyframes`： 定义  
    `animation`: 使用  







