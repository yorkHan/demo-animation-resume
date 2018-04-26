var css1=`
/*
 * 面试官你好，我是韩禹
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
*/
*{
    transition: all 1s;
  }
html{
    background: white;
    font-size:16px;
  }
#code{
    border: 1px solid #aaa;
    padding: 16px;
    float:left;
    margin:12px;
    left: 100px;
  }

/* 我需要一点代码高亮 */

.token.comment{color: slategray;}
.token.selector{color: #690;}
.token.punctuation{color: #999;}
.token.property{color:#905;}
    
/* 加一个呼吸效果 */

#code{
  animation: breath 1s infinite alternate-reverse;
}

/* 加一个3D效果 */

#code{
    background-color: #eee;
    transform:rotatey(5deg);
    position: absolute;
    top: 0;
}


/* 现在正式开始 */

/* 我需要一张白纸 */

#wrapper{
    width: 40%; 
    float: right;
    right:0;
    margin:12px;
    background-color:white;
    height: 100%;
    border:10px solid black;
    transform:rotatey(-5deg);
    position: absolute;
    top: 0;
    height: 100vh;
    overflow: hidden;
  }
  
  
`
var css2=`
  /* 于是我就可以在白纸上写字了，请看右边 */
  `

var markdown=`
### 自我介绍

我叫 韩禹 1993 年 9 月出生 江苏城市职业学院毕业 自学前端半年 希望应聘前端开发岗位

### 技能介绍

熟悉 JavaScript CSS 

### 项目介绍

XXX 轮播
XXX 简历
XXX 画板
### 联系方式

QQ 393900482    
Email 17315041620@163.com
手机 17315041620
`
var css3=`
/* 接下来用一个优秀的库 marked.js
* 把 Markdown 变成 HTML
*/




/*
* 这就是我的会动的简历
* 谢谢观看
*/
`
function addCode(preResult,code,fn) {
      let n=0
      let domCode=document.querySelector('#code')
      let id=setInterval(function () {
      domCode.innerHTML=Prism.highlight(preResult+code.substring(0,n), Prism.languages.css, 'css');
      styleTag.innerHTML=preResult+code.substring(0,n)
      domCode.scrollTop=domCode.scrollHeight
      n+=1
      if(n>=code.length){
          window.clearInterval(id)
          fn&&fn.call()
      }
  },10)  
}

function createPaper(fn) {
    var paper=document.createElement('pre')
    paper.id='wrapper'
    div1.appendChild(paper)
    fn&&fn.call()
}

function addMarkdown(md,fn) {
    let n=0
    let domMarkdown=document.querySelector('#wrapper')
    let id=setInterval(function () {
    domMarkdown.innerHTML=Prism.highlight(md.substring(0,n), Prism.languages.css, 'css');
    // styleTag.innerHTML=preResult+code.substring(0,n)
    domMarkdown.scrollTop=domMarkdown.scrollHeight
    n+=1
    if(n>=md.length){
        window.clearInterval(id)
        fn&&fn.call()
    }
},10)  
}

addCode('',css1,function () {
    createPaper(function(){
        addCode(css1,css2,function () {
            addMarkdown(markdown,function () {
                addCode(css1+css2,css3,function () {
            
                }) 
            })
        })
    })
})

