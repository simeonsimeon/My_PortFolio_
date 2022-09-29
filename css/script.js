let btn=document.getElementById("btn");
let info=document.getElementById("info");
 let what=false;
 function now(){
    what = !what;
    if(what){
       info.style.opacity=1;
       info.style.transition=".5s";
       btn.style.padding="30px";
       btn.style.borderRadius="50%";
       btn.style.backgroundColor="#ce0f55"
        
    }else{
        info.style.opacity=0;
        info.style.transition=".5s"
        btn.style.borderRadius="7px";
        btn.style.padding="10px 30px 10px 30px";
        btn.style.backgroundColor="rgba(0 0 0/0.6)"
    }

 }
 btn.addEventListener("click",function(){
    now();
 })
 
 const blink=["Fresher","FrontEnd-Developer","Engineer"];
 let count=0;
 let index=0;
 let textcontent="";
 let letter="";
 (function no(){
    if(count===blink.length){
        count=0;
    }
    textcontent=blink[count];
    letter=textcontent.slice(0,++index);
    document.getElementById("text").textContent=letter;
    if(letter.length===textcontent.length){
        count++;
        index=0;

    }
    setTimeout(no,350);
 }());
//  console.log(wow);
 let blick=document.getElementById("bt-click");
 let down=document.getElementById("down");
 let ul=document.getElementById("ul");
 let type=document.getElementById("type");
 let on=false;
 function navebar(){
      on = ! on;
      if(on){
         ul.style.display="block";
         type.style.display="none";
         down.style.display="none";
        
      }
      else{
        ul.style.display="none";
         type.style.display="block";
         down.style.display="block";
      }
 }


 blick.addEventListener("click",function(){
   navebar();
 })
 let formtext=document.getElementById("form-text");
 
 let map=document.getElementById("map");
const take=["Hi","Frd","Eppadi","Irukkinga?"];
function text(){
   formtext.innerText="Hi Buddy" +" "+map.value+" "+ "How Are YOu ?";
 }
//  var formcontent=document.getElementById("form-content");
 var level=0;
 var len=0;
 var plus="";
 var inn="";
 var z="Hi Frd Eppadi Irukkinga ?";
function span(){
    if(take.length==len){
         clearTimeout(span);
         document.getElementById("form-content").textContent=z;
         
    }

   plus=take[len];
   inn=plus.slice(0,++level);
   console.log(inn);
   
   document.getElementById("form-content").textContent=inn;
   
   if(plus.length===inn.length){
      len++;
      level=0;
   };
   setTimeout(span,500);
}



 let up=document.getElementById("up");
 up.addEventListener("click",function(){
   text();
   span();
   formcontent="";
   map.value="";
   
   // document.getElementById("form-content").textContent=z;
 });
//  let logo=document.getElementById("logo");
//   function lo(){
//    var change=Math.ceil(Math.random()*16777006).toString();
//    logo.style.backgroundColor="#"+change;
//   };
//   setInterval(lo,500);
  function chat(){
   var change=Math.ceil(Math.random()*256).toString();
  let chh=document.getElementsByClassName("chh");
  for(let i=0;i<chh.length;i++){
   // console.log(chh[i]);
   chh[i].style.backgroundColor="#"+change;
  }
  }
  setInterval(chat,450);
  
  function chatt(){
    change=Math.ceil(Math.random()*256).toString();
    console.log(change);
  let lo=document.getElementById("lo");
   lo.style.boxShadow="0,0,50px","#"+change;
   console.log( lo.style.boxShadow="0,0,50px","#"+change);
  
  }
  setInterval(chatt,450);

//   let a=10;
//   let b=30;
//    var ans;
//    var ans1;
//    var ans2;
//     function simeon(what,what1){
//         ans=what+what1;
//         ans1=what-what1;
//         ans2=what*what1;
//     }
//     simeon(a,b);
//     let suman=document.getElementById("suman");
//     let p1=document.createElement("p");
//     let p2=document.createElement("p");
//     let p3=document.createElement("p");
//    p1.innerHTML=ans;
//    p2.innerHTML=ans1;
//    p3.innerHTML=ans2;
//    suman.appendChild(p1)
//    suman.appendChild(p2)
//    suman.appendChild(p3)
   





 
