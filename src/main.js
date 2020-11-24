console.log('hi')
let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `
/*你好，我是前端新人
接下来我要加样式了
我要加的样式是*/
/*首先我准备一个div*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来把div变成一个八卦图
首先把div变成一个圆*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
一黑一白*/
#div1{
    background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘小球*/
#div1::before{
    content:'';
    display:block;
    width:100px;
    height:100px;
    position:absolute;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    content:'';
    display:block;
    width:100px;
    height:100px;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let n =0;
let string2 = '';

let step = ()=>{
    
    setTimeout(()=>{
        if(string[n]==='\n'){
            string2+='<br>'
        }else if(string[n]===' '){
            string2 += '&nbsp'
        }else{
            string2+=string[n]
            
        }
        html.innerHTML=string2;
        style.innerHTML= string.substring(0,n);
        n=n+1;
        window.scroll(0,9999);
        html.scroll(0,9999)
        if(n<string.length){
            step();
        } 
        
    },10);
};

step();