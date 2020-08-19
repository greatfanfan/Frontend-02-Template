# 学习笔记
## HTML
### HTML的定义
  HTML 与 XML + SGML的联系区别。
  DTD：https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd

### HTML标签语义
  em/strong：重音/重要性
  figure/figure caption： 图标/标题

### 浏览器API
  1. DOM API
    Node：Element（HTMLElement、SVGElement）、Document、CharacterData、DocumentFragment、DocumentType
    导航类操作：parentNode、childNode、firstChild、lasteChild、nextSibling、previousSibling、
    修改操作：appendChild、insertBefore、removeChild、replaceChild
    高级操作：
      CompareDocumentPosition：比较两个节点关系的函数、
      contains：是否包含、
      isEqualNode：是否完全相同、
      isSameNode：是否同一个节点、
      CloneNode：复制一个节点，参数为true时，包含子节点一起复制
  2. 事件 API
    addEventListener：options（capture、once、passive）
    Event：捕获和冒泡
  3. Range API
    range.setStartBefore
    range.setEndBefore
    range.setStartAfter
    range.setEndAfter
    range.selectNode
    range.selectNodeContents
    range.extractContents
    面试题： 5个同级元素逆序 
    living collection、insert时不需要从原先的未知挪走再插入，先remove再append。
    `Range使用`
    var range = new Range();
    range.setStart(element, 9);
    range.setEnd(element, 4);
    var range = document.getSelection().getRangeAt(0);

  4. CSSOM
    document.styleSheets[0].cssRules
    document.styleSheets[0].insertRule("p {color:pink}", 0);
    document.styleSheets[0].removeRule(0)
    CSSStyleRule【selectText String、 Style：K-V结构】
    CSSImportRule
    window.getComputedStyle(ele, presudoEle)【获取动画状态】
  5. CSSOM View
    `window.innerheight `
    `window.innerWidth`
    window.outerHeight
    window.outerWidth
    `window.devicePixelRation`(物理像素)
    window.screen (width, height, availHeight, availWidth)
    window.open()
    moveTo
    moveBy
    resizeTo
    resizeBy
    scroll相关：
    scrollTop
    scrollLeft
    scrollWidth
    scrollHeight
    scroll(x,y)
    scrollBy(x,y)
    scrollIntoView()
    scrollX、scrollY
  layout相关：
    getClientRects()
    getBoundingClientRects()

  6. 其他API
    Object.getOwnPropertyNames(window)
    


  





  
