$(document).ready(function () {
  // $('.modal').modal('show');
});

let openNvaBtn = document.querySelector('#open-nav');
let sideNavStatusOpen = false;
openNvaBtn.addEventListener('click', ()=>{
  if(!sideNavStatusOpen){
    document.getElementById("mySidenav").style.right = "0";
    document.getElementById("main").style.marginRight = "280px";
  }else{
    document.getElementById("mySidenav").style.right = "-280px";
    document.getElementById("main").style.marginRight= "0";
  }
  sideNavStatusOpen=!sideNavStatusOpen;
})


let leftList  = document.querySelector('#left-list-icon');
let listLeftStatusOpen = false;
leftList.addEventListener('click', ()=>{
  if(!listLeftStatusOpen){
    document.getElementById("list-msg").style.left = "0";
    document.getElementById("main").style.marginLeft = "350px";
  }else{
    document.getElementById("list-msg").style.left = "-350px";
    document.getElementById("main").style.marginLeft= "0";
  }
  listLeftStatusOpen=!listLeftStatusOpen;
})