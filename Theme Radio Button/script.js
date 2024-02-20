let $ = document;
$.querySelector(".holder").addEventListener("click",(event)=>{
    

   if($.querySelector(".sun").id==="moon"){
    $.querySelector(".sun").style="background-color:#f7e349;"
    $.querySelector(".holder").style="background-color:rgb(33, 200, 226);"
    $.querySelector(".four-pointed-star").style.display="none"
    $.querySelector(".four-pointed-star1").style.display="none"
    $.querySelector(".four-pointed-star2").style.display="none"
    $.querySelector(".four-pointed-star3").style.display="none"
    $.querySelector(".four-pointed-star4").style.display="none"
    $.querySelector(".sun").style.left="5px"
    $.querySelector(".sun-light1").style.left=""
    $.querySelector(".sun-light2").style.left="";
    $.querySelector(".cloud").style.right=""
    $.querySelector(".cloud1").style.right=""
    $.querySelector(".cloud2").style.right=""
    $.querySelector(".cloud3").style.right=""
    $.querySelector(".cloud4").style.right="";
    $.querySelector(".moony").style.display="none"
    $.querySelector(".moony1").style.display="none"
    $.querySelector(".moony2").style.display="none"
    $.querySelector(".sun").id="suny"


   }else{
    $.querySelector(".sun").style="background-color:#dcdcdc;"
    $.querySelector(".holder").style="background-color:rgb(26, 36, 41);"
    $.querySelector(".sun").style.left="85px"
   $.querySelector(".sun-light1").style.left="70px"
   $.querySelector(".sun-light2").style.left="55px";
   $.querySelector(".cloud").style.right="-50px"
   $.querySelector(".cloud1").style.right="-50px"
   $.querySelector(".cloud2").style.right="-50px"
   $.querySelector(".cloud3").style.right="-50px"
   $.querySelector(".cloud4").style.right="-50px";
   $.querySelector(".four-pointed-star").style.display="block"
   $.querySelector(".four-pointed-star1").style.display="block"
   $.querySelector(".four-pointed-star2").style.display="block"
   $.querySelector(".four-pointed-star3").style.display="block"
   $.querySelector(".four-pointed-star4").style.display="block"
   $.querySelector(".moony").style.display="block"
   $.querySelector(".moony1").style.display="block"
   $.querySelector(".moony2").style.display="block"
   $.querySelector(".sun").id="moon"
   }

})