const plus = document.querySelector(".plus"),
   minus = document.querySelector(".minus"),
   sum = document.querySelector(".sum");

   let a = 1;

   plus.addEventListener("click", () =>{
    a++;
    a = (a < 10) ? "0" + a : a;
    sum.innerText = a;
    console.log(a)
   })

   minus.addEventListener("click", () =>{
     if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        sum.innerText= a;
        console.log(a)
     }
   })

////// input tăng giảm ///////

   var MainImg = document.getElementById("MainImg");
   var smallimg = document.getElementsByClassName("small-img");

   smallimg[0].onclick = function(){
      MainImg.src = smallimg[0].src
   }
   smallimg[1].onclick = function(){
      MainImg.src = smallimg[1].src
   }
   smallimg[2].onclick = function(){
      MainImg.src = smallimg[2].src
   }
   smallimg[3].onclick = function(){
      MainImg.src = smallimg[3].src
   }
/// click img //////
///// view product ////

//// view product ////
function sendemail(){
   var params = {
     name: document.getElementById("name").value,
     email: document.getElementById("email").value,
     phone: document.getElementById("phone").value,
     contentarea: document.getElementById("contentarea").value,
   }
   const severID = "service_de6h46o";
   const template = "template_xu5wjbw";

emailjs.send(severID,template,params)
       .then((res) => {
          document.getElementById("name").value = "",
          document.getElementById("email").value = "",
          document.getElementById("phone").value = "",
          document.getElementById("contentarea").value = "",
          console.log(res)
          alert("thành công")
       })
       .catch((err) => console.log(err));
}

