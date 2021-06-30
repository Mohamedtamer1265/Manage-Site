// start making nav
let toggle = document.querySelector('.toggle');
let links = document.querySelector('.links');
let imgToggle = document.getElementById('ttogle');
toggle.addEventListener('click' , ()=> {
    links.classList.toggle('active');
    if(links.classList.contains("active")){
      imgToggle.src = "images/icon-close.svg";
      links.style.opacity = "100%";
      links.style.position = "relative";
    }else{
        imgToggle.src = "images/icon-hamburger.svg";
    }
})
// end making nav
//strart slider
const reviews = [{
  id:1,
  imag:"images/avatar-ali.png",
  title: "Ali Bravo",
  text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion.”",
},{
  id:2,
  imag:"images/avatar-anisha.png",
  title: "Anisha Li",
  text:"“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
},{
  id:3,
  imag:"images/avatar-richard.png",
  title:"Richard Watts",
  text: " “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
},{
  id:4,
  imag:"images/avatar-shanai.png",
  title: "Shanai Gough",
  text: " “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
}
];
let image = document.querySelector("#img-person"),
    h1 = document.querySelector("#title"),
    text = document.querySelector("#p-box"),
    nxtBTN = document.querySelector(".nxt-btn"),
    prevBTN = document.querySelector(".prev-btn");
  let rdmBtn = document.getElementById("rdm-btn");
let currentItems = 0;

window.addEventListener("DOMContentLoaded", function(){
  show(currentItems);
});
function show(p) {
 const item = reviews[p];
  image.src = item.imag;
  h1.textContent = item.title;
  text.textContent = item.text;
}
// nxt-btn
nxtBTN.addEventListener("click", function(){
  currentItems++;
  if( currentItems > reviews.length - 1){
    currentItems = 0;
  }
  if(currentItems == 0){
    itemf.classList.add("active");
    items.classList.remove("active");
    itemt.classList.remove("active");
    itemr.classList.remove("active");
  }else if (currentItems == 1){
    items.classList.add("active");
    itemf.classList.remove("active");
    itemt.classList.remove("active");
    itemr.classList.remove("active");
  }else if (currentItems == 2){
    itemt.classList.add("active");
    itemf.classList.remove("active");
    items.classList.remove("active");
    itemr.classList.remove("active");
  }else if(currentItems == 3){
    itemr.classList.add("active");
    itemf.classList.remove("active");
    items.classList.remove("active");
    itemt.classList.remove("active");
  }
  show(currentItems);
});
//previous-btn
prevBTN.addEventListener("click", function(){
  currentItems--;
  if(currentItems < 0){
    currentItems = reviews.length - 1;
  }
  if(currentItems == 0){
    itemf.classList.add("active");
    items.classList.remove("active");
    itemt.classList.remove("active");
    itemr.classList.remove("active");
  }else if (currentItems == 1){
    items.classList.add("active");
    itemf.classList.remove("active");
    itemt.classList.remove("active");
    itemr.classList.remove("active");
  }else if (currentItems == 2){
    itemt.classList.add("active");
    itemf.classList.remove("active");
    items.classList.remove("active");
    itemr.classList.remove("active");
  }else if(currentItems == 3){
    itemr.classList.add("active");
    itemf.classList.remove("active");
    items.classList.remove("active");
    itemt.classList.remove("active");
  }
  show(currentItems);
});
//random-btn
   rdmBtn.addEventListener("click" , function(){
     currentItems = Math.floor(Math.random() * reviews.length);
     show(currentItems);
     if(currentItems == 0){
      itemf.classList.add("active");
      items.classList.remove("active");
      itemt.classList.remove("active");
      itemr.classList.remove("active");
    }else if (currentItems == 1){
      items.classList.add("active");
      itemf.classList.remove("active");
      itemt.classList.remove("active");
      itemr.classList.remove("active");
    }else if (currentItems == 2){
      itemt.classList.add("active");
      itemf.classList.remove("active");
      items.classList.remove("active");
      itemr.classList.remove("active");
    }else if(currentItems == 3){
      itemr.classList.add("active");
      itemf.classList.remove("active");
      items.classList.remove("active");
      itemt.classList.remove("active");
    }
   })
   // strart bubbles
let itemf = document.getElementById("itemf"),
    items = document.getElementById("items"),
    itemt = document.getElementById("itemt"),
    itemr = document.getElementById("itemr");

itemf.addEventListener("click", function(){
  itemf.classList.add("active");
  if(itemf.classList.contains("active")){
    items.classList.remove("active");
    itemt.classList.remove("active");
    itemr.classList.remove("active");
  }
  show(0)
});
items.addEventListener("click", function(){
  items.classList.add("active");
  if(items.classList.contains("active")){
    itemf.classList.remove("active");
    itemt.classList.remove("active");
    itemr.classList.remove("active");

  }
  show(1)
});
itemt.addEventListener("click", function(){
itemt.classList.add("active");
  show(2)
  if(itemt.classList.contains("active")){
    itemf.classList.remove("active");
    items.classList.remove("active");
    itemr.classList.remove("active");
  }
});
itemr.addEventListener("click", function(){
  itemr.classList.add("active");
  show(3);
  if(itemr.classList.contains("active")){
    itemf.classList.remove("active");
    items.classList.remove("active");
    itemt.classList.remove("active");
  }
});
//end bubbles