// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
 }

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});
function validate(){

    let uname = document.getElementById("uname").value;
    let fname = document.getElementById("fname").value;
    let gender = document.cform.gender.value;
    let DOB = document.getElementById("DOB").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;
    let tamil = document.getElementById("tamil");
    let english = document.getElementById("english");
    let hindi = document.getElementById("hindi");
    let malayalam = document.getElementById("malayalam");
    
    
        document.write("NAME : ");
        document.write(uname.fontcolor("blue"));
        document.write("<br>");
        document.write("CITY : ");
        document.write(fname.fontcolor("blue"));
        document.write("<br>");
        document.write("GENDER : ");
        document.write(gender.fontcolor("blue"));
        document.write("<br>");
        document.write("ADDRESS: ");
        document.write(DOB.fontcolor("blue"));
        document.write("<br>");
       
        if(email == "" && password == ""){
            alert("email and password cannot be blank ")
        }
    else{
        alert("YOUR ORDER IS SUCCESSFULLY REGISTEREG DELIVER ON WITHIN 2 DAYS")
    }
    
        document.write("EMAIL : ");
        document.write(email.fontcolor("blue"));
        document.write("<br>");
    
        document.write("PASSWORD : ");
        document.write(password.fontcolor("blue"));
        document.write("<br>");
    }



var carousel=document.getElementById("hello");
var images=[".images/images 1.jpg","./.images/images 2.jpg","./.images/images 3.jpg"]
var num=7;


function next(){
    num++;
   console.log("step1");
   console.log( "num=",num);
    if(num>=images.length){
        num=0;
       console.log("step2");
       console.log("num",num);
       carousel.src=images[num]
        console.log("num",num);  
    }
    else{
       console.log("step3");
       carousel.src=images[num]
        console.log("num",num);

    }
                    
};
function back(){
    num--;
    if(num<0){
        num=images.length-1;
        carousel.src=images[num]
            }
            else{
              carousel.src=images[num]
            }

};

var carousel=document.getElementById ("hello");
var images=["./images/download 1.png","./images/download 2.png","./images/download 3.png",]
var num=7;


function next(){
    num++;
   console.log("step1");
   console.log( "num=",num);
    if(num>=images.length){
        num=0;
       console.log("step2");
       console.log("num",num);
       carousel.src=images[num]
        console.log("num",num);  
    }
    else{
       console.log("step3");
       carousel.src=images[num]
        console.log("num",num);

    }
                    
};
function back(){
    num--;
    if(num<0){
        num=images.length-1;
        carousel.src=images[num]
            }
            else{
              carousel.src=images[num]
            }

};




















