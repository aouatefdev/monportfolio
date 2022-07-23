
$('.carousel').carousel({
  interval:1000
})

$('.menu-toggle').click(function() {

  $('ul').toggleClass('opening');
  $(this).toggleClass('open');

})

let slider = document.getElementById("slid");
let a = document.getElementById("un");
let b = document.getElementById("deux");
let c = document.getElementById("trois");
let d = document.getElementById("quatre");
let p1= document.getElementById("articleE");
let p2= document.getElementById("articleD");
let p3= document.getElementById("articleL");
let p4= document.getElementById("articleC");
let input = document.getElementById("return");
let book= document.getElementById("divGlobale");
let cercle= document.getElementById("divCercle");


function change1() {
book.style.display = "none";
slider.style.position="relative";
slider.style.animation="paused";              
a.style.transform="rotateY(0deg) translateZ(0px)";       
b.style.transform="rotateY(0deg) translateZ(0px)";       
c.style.transform="rotateY(0deg) translateZ(0px)";       
d.style.transform="rotateY(0deg) translateZ(0px)"; 
input.style.display="block";      
a.style.position="relative";
b.style.position="relative";
c.style.position="relative";
d.style.position = "relative";  
}

function change3() {
book.style.display = "none";  
slider.style.position="relative";
slider.style.animation="paused";              
a.style.transform="rotateY(0deg) translateZ(0px)";       
b.style.transform="rotateY(0deg) translateZ(0px)";       
c.style.transform="rotateY(0deg) translateZ(0px)";       
d.style.transform="rotateY(0deg) translateZ(0px)"; 
input.style.display="block";      
a.style.position="relative";
b.style.position="relative";
c.style.position="relative";
d.style.position="relative";            
}

function change5() {
  book.style.display = "none"; 
  slider.style.position="relative";
  slider.style.animation="paused";              
  a.style.transform="rotateY(0deg) translateZ(0px)";       
  b.style.transform="rotateY(0deg) translateZ(0px)";       
  c.style.transform="rotateY(0deg) translateZ(0px)";       
  d.style.transform="rotateY(0deg) translateZ(0px)"; 
  input.style.display="block";      
  a.style.position="relative";
  b.style.position="relative";
  c.style.position="relative";
  d.style.position="relative";
}


function change7() {
  book.style.display = "none";
  slider.style.position="relative";
  slider.style.animation="paused";              
  a.style.transform="rotateY(0deg) translateZ(0px)";       
  b.style.transform="rotateY(0deg) translateZ(0px)";       
  c.style.transform="rotateY(0deg) translateZ(0px)";       
  d.style.transform="rotateY(0deg) translateZ(0px)"; 
  input.style.display="block";      
  a.style.position="relative";
  b.style.position="relative";
  c.style.position="relative";
  d.style.position="relative"; 
}

function change(){
     p1.style.display="block"; 
     p2.style.display="none"; 
     p3.style.display="none"; 
     p4.style.display="none"; 
     book.style.display="none"; 
     cercle.style.display="none"; 
}

function change2(){    
  p2.style.display="block";
  p1.style.display="none";        
  p3.style.display="none";        
  p4.style.display="none";
  book.style.display="none"; 
  cercle.style.display="none";        
}

function change4(){
   p3.style.display="block";   
  p2.style.display="none"; 
  p1.style.display="none"; 
  p4.style.display="none";
  book.style.display="none"; 
  cercle.style.display="none";  
    
}

function change6(){  
    p4.style.display="block";    
    p3.style.display="none"; 
    p2.style.display="none"; 
    p1.style.display="none"; 
    book.style.display="none"; 
    cercle.style.display="none"; 
}

carouselExampleFade.addEventListener("click",artE);  
carouselExampleFade.addEventListener("click",artD); 
carouselExampleFade.addEventListener("click",artL); 
carouselExampleFade.addEventListener("click",artC); 

function artE(){
  cercle.style.display="block"; 
  p1.style.display="none";
}
function artD(){
  cercle.style.display="block"; 
  p2.style.display="none";
}
function artL(){
  cercle.style.display="block"; 
  p3.style.display="none";
}
function artC(){ 
  cercle.style.display="block"; 
  p4.style.display="none";
}

function retour(){
slider.style.position="absolute";
slider.style.animation="rotate 10s infinite linear"; 
a.style.transform="rotateY( 0deg) translateZ(100px)";       
b.style.transform="rotateY( 90deg) translateZ(100px)";       
c.style.transform="rotateY(180deg) translateZ(100px)";       
d.style.transform="rotateY(270deg) translateZ(100px)";             
a.style.position="absolute";
b.style.position="absolute";
c.style.position="absolute";
d.style.position="absolute"; 
input.style.display="none"; 
book.style.display="block";    
}

let maquette1 = document.getElementById("feuille1");
let maquette2 = document.getElementById("feuille2");
let maquette3 = document.getElementById("feuille3");
let maquette4 = document.getElementById("feuille4");
let rectangle3 = document.getElementById("rectangle3");

let x=1
function firstclick() {
  cercle.style.display="none";
  if (x == 1) {
    maquette1.style.transform = "translate(0px, -270px)";
    maquette2.style.transform = "translate(0px, -205px)";
    maquette3.style.transform = "translate(0px, -140px)";
    maquette4.style.transform = "translate(0px, -75px)"; 
    x = 2; 
  } else {
    cercle.style.display="block";
    maquette1.style.transform = "none";
    maquette2.style.transform = "none";
    maquette3.style.transform = "none";
    maquette4.style.transform = "none";
    x = 1;
  }
}

  
  
// if (window.matchMedia("(min-width: 750.99px)").matches) {
    
//     function firstclick(){
//       cercle.style.display="none";
//       if (x == 1) { 
//         cercle.style.display="none";
//         maquette1.style.transform="translate(0px, -270px)";
//         maquette2.style.transform="translate(0px, -205px)";
//         maquette3.style.transform="translate(0px, -140px)";
//         maquette4.style.transform="translate(0px, -75px)";
//        x = 2;    
//       } 
    
//     else { 
//         cercle.style.display="block";  
//         maquette1.style.transform="none";
//         maquette2.style.transform="none";
//         maquette3.style.transform="none";
//         maquette4.style.transform="none";
//         x = 1;
//       }
     
//     }


//     function change1(){
//       book.style.display="none";
//       slider.style.position="relative";
//       slider.style.animation="paused";              
//       a.style.transform="rotateY(0deg) translateZ(0px)";       
//       b.style.transform="rotateY(0deg) translateZ(0px)";       
//       c.style.transform="rotateY(0deg) translateZ(0px)";       
//       d.style.transform="rotateY(0deg) translateZ(0px)"; 
//       input.style.display="block";      
//       a.style.position="relative";
//       b.style.position="relative";
//       c.style.position="relative";
//       d.style.position="relative"; 
//     }
//     function change3(){
//       book.style.display="none";
//       slider.style.position="relative";
//       slider.style.animation="paused";              
//       a.style.transform="rotateY(0deg) translateZ(0px)";       
//       b.style.transform="rotateY(0deg) translateZ(0px)";       
//       c.style.transform="rotateY(0deg) translateZ(0px)";       
//       d.style.transform="rotateY(0deg) translateZ(0px)"; 
//       input.style.display="block";      
//       a.style.position="relative";
//       b.style.position="relative";
//       c.style.position="relative";
//       d.style.position="relative"; 
//     }
//     function change5(){
//       book.style.display="none";
//       slider.style.position="relative";
//       slider.style.animation="paused";              
//       a.style.transform="rotateY(0deg) translateZ(0px)";       
//       b.style.transform="rotateY(0deg) translateZ(0px)";       
//       c.style.transform="rotateY(0deg) translateZ(0px)";       
//       d.style.transform="rotateY(0deg) translateZ(0px)"; 
//       input.style.display="block";      
//       a.style.position="relative";
//       b.style.position="relative";
//       c.style.position="relative";
//       d.style.position="relative";
//     }
//     function change7(){
//       book.style.display="none";
//       slider.style.position="relative";
//       slider.style.animation="paused";              
//       a.style.transform="rotateY(0deg) translateZ(0px)";       
//       b.style.transform="rotateY(0deg) translateZ(0px)";       
//       c.style.transform="rotateY(0deg) translateZ(0px)";       
//       d.style.transform="rotateY(0deg) translateZ(0px)"; 
//       input.style.display="block";      
//       a.style.position="relative";
//       b.style.position="relative";
//       c.style.position="relative";
//       d.style.position="relative";
//     }
//   }else{
//     book.style.display="block";
// }

//   if(window.matchMedia("(max-width: 620px)").matches){
  
//     function firstclick(){
//       cercle.style.display="none"; 
//       if (x == 1) {
//         maquette1.style.transform="translate(0px, -270px)";
//         maquette2.style.transform="translate(0px, -205px)";
//         maquette3.style.transform="translate(0px, -140px)";
//         maquette4.style.transform="translate(0px, -75px)";
//        x = 2;
//       } else { 
//         cercle.style.display="block"; 
//         maquette1.style.transform="none";
//         maquette2.style.transform="none";
//         maquette3.style.transform="none";
//         maquette4.style.transform="none";
//         x = 1; 
//       }
//     }

//     function change1(){
//       book.style.display="none";
//       slider.style.position="relative";
//       slider.style.animation="paused";              
//       a.style.transform="rotateY(0deg) translateZ(0px)";       
//       b.style.transform="rotateY(0deg) translateZ(0px)";       
//       c.style.transform="rotateY(0deg) translateZ(0px)";       
//       d.style.transform="rotateY(0deg) translateZ(0px)"; 
//       input.style.display="block";      
//       a.style.position="relative";
//       b.style.position="relative";
//       c.style.position="relative";
//       d.style.position="relative"; 
//     }
//     function change3(){
//       book.style.display="none";
//       slider.style.position="relative";
//       slider.style.animation="paused";              
//       a.style.transform="rotateY(0deg) translateZ(0px)";       
//       b.style.transform="rotateY(0deg) translateZ(0px)";       
//       c.style.transform="rotateY(0deg) translateZ(0px)";       
//       d.style.transform="rotateY(0deg) translateZ(0px)"; 
//       input.style.display="block";      
//       a.style.position="relative";
//       b.style.position="relative";
//       c.style.position="relative";
//       d.style.position="relative"; 
//     }
//     function change5(){
//       book.style.display="none";
//       slider.style.position="relative";
//       slider.style.animation="paused";              
//       a.style.transform="rotateY(0deg) translateZ(0px)";       
//       b.style.transform="rotateY(0deg) translateZ(0px)";       
//       c.style.transform="rotateY(0deg) translateZ(0px)";       
//       d.style.transform="rotateY(0deg) translateZ(0px)"; 
//       input.style.display="block";      
//       a.style.position="relative";
//       b.style.position="relative";
//       c.style.position="relative";
//       d.style.position="relative";
//     }
//     function change7(){
//       book.style.display="none";
//       slider.style.position="relative";
//       slider.style.animation="paused";              
//       a.style.transform="rotateY(0deg) translateZ(0px)";       
//       b.style.transform="rotateY(0deg) translateZ(0px)";       
//       c.style.transform="rotateY(0deg) translateZ(0px)";       
//       d.style.transform="rotateY(0deg) translateZ(0px)"; 
//       input.style.display="block";      
//       a.style.position="relative";
//       b.style.position="relative";
//       c.style.position="relative";
//       d.style.position="relative";
//     }
//   }else{
//     book.style.display="block";
// }







      
