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
